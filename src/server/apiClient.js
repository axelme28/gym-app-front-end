// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Cambia esta URL por la de tu API
  timeout: 10000, // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
    // Agrega aquí otros encabezados por defecto que necesites
  },
});

// Interceptores de solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes agregar aquí el token de autenticación, si es necesario
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores de respuesta
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejo de errores
    if (error.response && error.response.status === 403) {
      // Maneja aquí el error 401 (no autorizado), como redirigir a login
      console.error('Error 401: No autorizado.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
