import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/login.css"

export default function LoginPage({ onLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    try {
      const respuesta = await axios.post("http://localhost/loginApi/login", data);
      alert("Bienvenido " + respuesta.data.nombre);
      onLogin(respuesta.data.nombre);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Contraseña o usuario incorrecto");
    }
  };

  return (
    <>
    <div class='formularioLogin'>
      <h1>Inicie sesión</h1>
      <form onSubmit={handleSubmit(onSubmited)}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            {...register("correo", { required: true })}
          />
          {errors.correo && <p>Debes escribir un correo</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("contrasena", { required: true })}
          />
          {errors.contrasena && <p>Debes escribir una contraseña</p>}
        </div>

        <button type="submit" class='Boton'>Submit</button>
      </form>
    </div>
    </>
  );
}
