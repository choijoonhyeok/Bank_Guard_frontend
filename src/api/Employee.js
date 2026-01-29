import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getCustomers = () => {
  return api.get('/employee');
};
