import createHttp from './BaseServices';

const http = createHttp(true);

export const getUsers = () => http.get('/users').then((res) => res);
export const getCurrentUser = () => http.get('/users/me');
export const getDetail = (id) => http.get(`/users/${id}`).then((res) => res);

export const createUser = (body) =>
  http.post('/users/create-user', body).then((res) => res);

export const updateUser = (body) =>
  http.put('/users/update-user', body).then((res) => console.log(res));

export const deleteUsers = (body) =>
  http.delete('/users/delete-user', body).then((res) => res);
