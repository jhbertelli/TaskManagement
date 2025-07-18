import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './index.css'

import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QUERY_CLIENT_CONFIG } from 'constants/query-client-config'

import App from './App'

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </MantineProvider>
    </StrictMode>
)
