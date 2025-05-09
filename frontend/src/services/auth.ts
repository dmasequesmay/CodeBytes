import { auth } from '../firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  User
} from 'firebase/auth';

// Set persistence to local storage for session maintenance
auth.onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    }));
  } else {
    localStorage.removeItem('user');
  }
});

// Sign In function
export const signIn = async (email: string, password: string) => {
  await setPersistence(auth, browserLocalPersistence);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName
      }));
      return user;
    });
};

// Sign Up function
export const signUp = async (email: string, password: string) => {
  await setPersistence(auth, browserLocalPersistence);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName
      }));
      return user;
    });
};

// Sign Out function
export const signOutUser = async () => {
  await signOut(auth);
  // Clear localStorage
  localStorage.removeItem('user');
  return Promise.resolve();
};

// Google Sign-In
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await setPersistence(auth, browserLocalPersistence);
  return signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName
      }));
      return user;
    });
};

// Get current user from Firebase
export const getCurrentUser = (): User | null => {
  return auth.currentUser || JSON.parse(localStorage.getItem('user') || 'null');
};

// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};
