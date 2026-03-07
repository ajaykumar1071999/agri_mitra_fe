'use client';

import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleLoginButton() {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const token = credentialResponse.credential;

      const res = await axios.post('http://localhost:5000/api/auth/google', { token });

      localStorage.setItem('token', res.data.token);

      console.log('User:', res.data.user);
    } catch (error) {
      console.error('Google login error', error);
    }
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />;
}
