import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combines Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Save user data to localStorage
export function saveUserToLocalStorage(user: any) {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}

// Get user data from localStorage
export function getUserFromLocalStorage(): any {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Remove user data from localStorage
export function removeUserFromLocalStorage() {
  localStorage.removeItem('user');
}
