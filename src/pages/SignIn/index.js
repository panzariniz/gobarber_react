import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';

import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email deve ser válido')
    .required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

// import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="email"
          placeholder="Seu Email"
          ref={register}
        />
        {errors.email && (
          <p className="form__input--message-error">{errors.email.message}</p>
        )}

        <input
          name="password"
          type="password"
          placeholder="Sua senha"
          ref={register}
        />
        {errors.password && (
          <p className="form__input--message-error">
            {errors.password.message}
          </p>
        )}

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
