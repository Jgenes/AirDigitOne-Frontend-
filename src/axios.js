import axios from "axios";

// API 1 - User Service
const api1 = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
});

// API 2 - Employer Service
const api2 = axios.create({
  baseURL: "http://127.0.0.1:4002/api/v1/employer",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach interceptor to both
[api1, api2].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
});

export { api1, api2 };
