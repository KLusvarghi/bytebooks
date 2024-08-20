import { ErrorInfo } from 'react';

export async function resolvePromise<T>(promise: Promise<T>): Promise<T> {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return await promise;
}
// aqui iremos tratar os nosso erros customizadamente
// errorInfo
type ErrorLogFunction = (error: Error, errorInfo?: ErrorInfo) => void;

export const errorLog: ErrorLogFunction = (error, errorInfo) => {
  console.error('Error capturado: ', error.message);
	// errorInfo?.componentStack irá nos retornar detalhadamente o error atual e os passados
  if (errorInfo) {
    console.error('Informações adicionais: ', errorInfo);
  }
};
