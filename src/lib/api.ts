export interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface AdminProfile {
  id: number | string;
  fullName: string;
  email: string;
  userType: string | null;
}

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiRequest<T>(
  path: string,
  token: string,
  init: RequestInit = {}
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, '');
  if (!apiUrl) {
    throw new ApiError('Configure NEXT_PUBLIC_API_URL no arquivo .env.local.');
  }

  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${token}`);
  const apiHostname = new URL(apiUrl).hostname;
  if (apiHostname.endsWith('.ngrok-free.dev')) {
    headers.set('ngrok-skip-browser-warning', 'true');
  }
  if (init.body && !(init.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  let response: Response;
  try {
    response = await fetch(`${apiUrl}${path}`, {
      ...init,
      headers,
      cache: 'no-store',
    });
  } catch {
    throw new ApiError('Não foi possível conectar à API. Verifique sua conexão.');
  }

  const payload = (await response.json().catch(() => null)) as
    | ApiEnvelope<T>
    | { message?: string }
    | null;

  if (!response.ok) {
    const message =
      payload && 'message' in payload && payload.message
        ? payload.message
        : 'Não foi possível concluir a solicitação.';
    throw new ApiError(message, response.status);
  }

  if (!payload || !('data' in payload)) {
    throw new ApiError('A API retornou uma resposta inválida.', response.status);
  }

  return payload.data;
}
