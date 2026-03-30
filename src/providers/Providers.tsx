'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Provider } from 'react-redux';
// import { store } from '@/store';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      {/* Add Redux / Theme / Auth Provider here later */}
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        {children}
      </GoogleOAuthProvider>
    </>
  );
}
