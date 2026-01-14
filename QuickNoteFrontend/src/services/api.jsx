import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const notesApi = {
  getAll: (search = '', sort = '-updated_at') =>
    api.get(`/notes/?search=${search}&sort=${sort}`),

  getById: (id) => api.get(`/notes/${id}/`),

  create: (note) => api.post('/notes/', note),

  update: (id, note) => api.put(`/notes/${id}/`, note),

  patch: (id, note) => api.patch(`/notes/${id}/`, note),

  delete: (id) => api.delete(`/notes/${id}/`),
};

export default api;