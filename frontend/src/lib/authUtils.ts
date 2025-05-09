import { getUserFromLocalStorage } from './utils';

export const getUserEmail = (): string | null => {
  const user = getUserFromLocalStorage();
  return user?.email || null;
};

export const addEmailHeader = (config: any): any => {
  const email = getUserEmail();
  if (email) {
    config.headers = {
      ...config.headers,
      'user-email': email
    };
  }
  return config;
};
