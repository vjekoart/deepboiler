export function apiRequest<Type>(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body: unknown = null): Promise<Type> {
  const resource = import.meta.env.VITE_API_BASE + endpoint
  const options: RequestInit = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return window.fetch(resource, options).then(response => response.json() as Type)
}

export interface GraphResponse<Type> {
  data?: {
    [key: string]: Type
  }
  errors?: unknown
}

export function graphRequest<Type>(query: string): Promise<GraphResponse<Type>> {
  return apiRequest('graphql', 'POST', { query })
}
