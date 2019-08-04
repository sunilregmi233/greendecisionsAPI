import session from './session';

export default {
  login(username, password) {
    return session.post('/api/v1/rest-auth/login/', { username, password });
  },
  logout() {
    return session.post('/api/v1/rest-auth/logout/', {});
  },
  createAccount(username, password1, password2, email) {
    return session.post('/api/v1/rest-auth/registration/', { username, password1, password2, email });
  },
  changeAccountPassword(password1, password2) {
    return session.post('/api/v1/rest-auth/password/change/', { password1, password2 });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post('/api/v1/rest-auth/password/reset/', { email });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
    return session.post('/api/v1/rest-auth/password/reset/confirm/', { uid, token, new_password1, new_password2 });
  },
  getAccountDetails() {
    return session.get('/api/v1/users/');
  },
  updateAccountDetails(data) {
    return session.patch('/api/v1/users/{id}/', data);
  },
  verifyAccountEmail(key) {
    return session.post('/api/v1/rest-auth/registration/verify-email/', { key });
  },
};
