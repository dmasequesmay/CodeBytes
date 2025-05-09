const mockAuth = {
  currentUser: JSON.parse(localStorage.getItem('user') || 'null'),  // Load from localStorage on initialization
  isAuthenticated: localStorage.getItem('user') !== null  // Check if user is logged in
};

// Sign In function
export const signIn = async (email: string, password: string) => {
  mockAuth.currentUser = {
    email,
    uid: 'mock-user-id',
    displayName: email.split('@')[0]
  };
  mockAuth.isAuthenticated = true;
  
  // Save user data to localStorage
  localStorage.setItem('user', JSON.stringify(mockAuth.currentUser));
  return Promise.resolve();
};

// Sign Up function
export const signUp = async (email: string, password: string) => {
  mockAuth.currentUser = {
    email,
    uid: 'mock-user-id',
    displayName: email.split('@')[0]
  };
  mockAuth.isAuthenticated = true;

  // Save user data to localStorage
  localStorage.setItem('user', JSON.stringify(mockAuth.currentUser));
  return Promise.resolve();
};

// Sign Out function
export const signOut = async () => {
  mockAuth.currentUser = null;
  mockAuth.isAuthenticated = false;

  // Remove user data from localStorage
  localStorage.removeItem('user');
  return Promise.resolve();
};

// Get current user
export const getCurrentUser = () => {
  return mockAuth.currentUser;
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  return mockAuth.isAuthenticated;
};

// Sign In with Google (mocked)
export const signInWithGoogle = async () => {
  mockAuth.currentUser = {
    email: 'mock-user@gmail.com',
    uid: 'mock-google-user-id',
    displayName: 'Mock User'
  };
  mockAuth.isAuthenticated = true;

  // Save Google user data to localStorage
  localStorage.setItem('user', JSON.stringify(mockAuth.currentUser));
  return Promise.resolve();
};
