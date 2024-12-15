
// middleware/auth.js

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useState('isLoggedIn');

  // If not logged in, redirect to login page
  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login');
  }
});


