'use client';

import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function GoogleLoginButton() {
  const router = useRouter();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const token = credentialResponse.credential;

      const res = await axios.post('http://localhost:8080/api/auth/google', {
        token,
      });

      localStorage.setItem('token', res.data.token);

      console.log('User:', res.data.user);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Google login error', error);
    }
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />;
}
