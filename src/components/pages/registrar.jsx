import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import "../css/registrar.css"

export default function Registrar({ onLogin }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const contra = watch("contrasena");
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    console.log("formulario de datos", data);
    try {
      const respuesta = await axios.post("http://localhost/loginApi/register", {
        nombre: data.nombre,
        correo: data.correo,
        contrasena: data.contrasena
      });
      alert(respuesta.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor-registro">
      <h1 className="tituloFormulario">Registro</h1>
      <form onSubmit={handleSubmit(onSubmited)}>
        
        <div>
          <label>Nombre</label>
          <input type="text" {...register("nombre", { required: true })} />
          {errors.nombre && <p>Debes escribir un Nombre</p>}
        </div>

        <div>
          <label>Email address</label>
          <input type="email" {...register("correo", { required: true })} />
          {errors.correo && <p>Debes escribir un correo</p>}
        </div>

        <div>
          <label>Password</label>
          <input type="password" {...register("contrasena", { required: true })} />
          {errors.contrasena && <p>Debes escribir una contraseña</p>}
        </div>

        <div>
          <label>Confirmar Password</label>
          <input
            type="password"
            {...register("confirmar_contrasena", {
              required: "Por favor digite una contraseña",
              validate: (value) => value === contra || "La contraseña no coincide"
            })}
          />
          {errors.confirmar_contrasena && <p>{errors.confirmar_contrasena.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
