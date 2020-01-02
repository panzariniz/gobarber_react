import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input type="text" name="name" placeholder="Nome Completo" />
        <Input type="email" name="email" placeholder="E-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Senha nova" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha nova"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
