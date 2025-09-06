
import { API_ROUTES } from '@/constants';

// Esto es un ejemplo de cómo podrían lucir tus servicios de API.
// Puedes usar fetch, axios, o cualquier librería que prefieras.

export const getUser = async (userId: string) => {
  // const response = await fetch(`${API_ROUTES.GET_USER}/${userId}`);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch user');
  // }
  // return response.json();
  console.log(`Fetching user ${userId}...`);
  return { id: userId, name: 'John Doe' };
};
