import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../api/login';

export const useLogin = () => {
  return useMutation(LOGIN_MUTATION);
};
