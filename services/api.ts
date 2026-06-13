import axios from "axios";

export const api = axios.create({
  baseURL: "https://dieta-app-beckend-production.up.railway.app",
});
