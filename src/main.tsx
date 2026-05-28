import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './index.css'
import Router from './router'
import process from 'dotenv';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
      cacheTime: 1000 * 60 * 60 * 24, // Data stays in cache for 24 hours
      refetchOnWindowFocus: false, // Do not refetch on window focus by default
    },
  },
})

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with ID "root" not found in the document.');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router /> 
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
