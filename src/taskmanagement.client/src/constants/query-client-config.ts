import { QueryClientConfig } from '@tanstack/react-query'

const RETRY_COUNT = 3

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
    defaultOptions: {
        queries: { retry: RETRY_COUNT },
        mutations: { retry: RETRY_COUNT },
    },
}
