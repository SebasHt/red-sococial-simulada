import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    try {
      const respuesta = await axios.post("http://localhost/loginApi/login", data);
      alert("Bienvenido " + respuesta.data.nombre);
      onLogin(respuesta.data.nombre)
      navigate("/home");
    } catch (error) {
      console.log(error)
      alert("Contraseña o usuario incorrecto");
      
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-8'>
          <h1 className='text-center text-primary my-5'>Inicie sesión</h1>
        </div>
        <div className='col-sm-8'>
          <form onSubmit={handleSubmit(onSubmited)} className='bg-body-secondary p-3 rounded'>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                {...register("correo", { required: true })}
                className="form-control"
              />
              {errors.correo && <p className='text-danger'>Debes escribir un correo</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("contrasena", { required: true })}
                className="form-control"
              />
              {errors.contrasena && <p className='text-danger'>Debes escribir una contraseña</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

