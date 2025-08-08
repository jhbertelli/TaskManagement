import { QueryClientConfig } from '@tanstack/react-query'

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: false,
            throwOnError: true,
        },
        mutations: {
            retry: false,
            throwOnError: true,
        },
    },
}
