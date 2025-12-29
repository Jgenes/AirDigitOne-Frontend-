import axios from "axios";

// Function to create axios instances
const createApiInstance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// API 1 - User Service
const api1 = createApiInstance("http://127.0.0.1:5000/api/v1/user");

// API 2 - Employer Service
const api2 = createApiInstance("http://127.0.0.1:4002/api/v1/employer");

// Attach interceptors to both API instances
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

// Export both APIs
export { api1, api2 };
