const mockAuth = {
  currentUser: null,
  isAuthenticated: false
};

export const signIn = async (email: string, password: string) => {
  mockAuth.currentUser = {
    email,
    uid: 'mock-user-id',
    displayName: email.split('@')[0]
  };
  mockAuth.isAuthenticated = true;
  return Promise.resolve();
};

export const signUp = async (email: string, password: string) => {
  mockAuth.currentUser = {
    email,
    uid: 'mock-user-id',
    displayName: email.split('@')[0]
  };
  mockAuth.isAuthenticated = true;
  return Promise.resolve();
};

export const signOut = async () => {
  mockAuth.currentUser = null;
  mockAuth.isAuthenticated = false;
  return Promise.resolve();
};

export const getCurrentUser = () => {
  return mockAuth.currentUser;
};

export const isAuthenticated = () => {
  return mockAuth.isAuthenticated;
};

export const signInWithGoogle = async () => {
  mockAuth.currentUser = {
    email: 'mock-user@gmail.com',
    uid: 'mock-google-user-id',
    displayName: 'Mock User'
  };
  mockAuth.isAuthenticated = true;
  return Promise.resolve();
};