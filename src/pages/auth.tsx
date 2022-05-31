import React from 'react';
import { NextPage } from 'next';
import { createApiClient } from '@/libs/apiClient';

const Auth: NextPage = () => {
  const handleClickLogin = async () => {
    console.log('*** clicked ***');

    const apiClient = createApiClient({ isAuth: false });
    let url = `/sanctum/csrf-cookie`;
    const csrfCheck = await apiClient.get(url, {
      params: null,
      data: null,
    });

    console.log('*** csrfCheck ***', csrfCheck);

    if (csrfCheck.status === 204) {
      url = '/login';
      const response = await apiClient.post(url, {
        email: 'label8.me@gmail.com',
        password: 'password',
      });

      console.log('*** response ***', response);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleClickLogin}>
        ログイン
      </button>
    </div>
  );
};

export default Auth;
