/* import { authActions } from '../slices/authSlice.ts'; // Import your authSlice actions

const authMiddleware = (store) => (next) => (action) => {
  if (authActions.setToken.match(action)) {
    // Login action dispatched, you may handle the token validation here
    const token = store.getState().auth.token;

    if (token) {
      // Token exists, user is authenticated
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      // Token does not exist or is invalid, user is not authenticated
      localStorage.setItem('isAuthenticated', 'false');
    }
  } else if (authActions.logout.match(action)) {
    localStorage.setItem('isAuthenticated', 'false');
  }

  // Continue with the action
  return next(action);
};

export default authMiddleware; */