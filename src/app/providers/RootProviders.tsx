import { QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { queryClient } from '../configs/queryClient.config';

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
