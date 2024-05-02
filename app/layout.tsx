import { ReactNode } from 'react';
import { RootLayout } from '@/layouts/RootLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
