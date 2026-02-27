'use client';

import { ReactNode } from 'react';
// import { Provider } from 'react-redux';
// import { store } from '@/store';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Add Redux / Theme / Auth Provider here later */}
      {children}
    </>
  );
}
