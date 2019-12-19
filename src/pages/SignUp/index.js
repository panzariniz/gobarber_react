import React from 'react';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';

import * as yup from 'yup';
import logo from '~/assets/logo.svg';

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Email deve ser válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .min(6, 'Senha deve conter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

// import { Container } from './styles';

export default function SignUp() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const onSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="Nome Completo" ref={register} />
        {errors.name && (
          <p className="form__input--message-error">{errors.name.message}</p>
        )}

        <input
          type="text"
          name="email"
          placeholder="Seu Email"
          ref={register}
        />
        {errors.email && (
          <p className="form__input--message-error">{errors.email.message}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Sua senha"
          ref={register}
        />
        {errors.password && (
          <p className="form__input--message-error">
            {errors.password.message}
          </p>
        )}

        <button type="submit">Criar Conta</button>
        <Link to="/">Ja tenho login</Link>
      </form>
    </>
  );
}
