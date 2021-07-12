import axios, { AxiosInstance } from "axios"
import { API_ENDPOINT } from "../configs/api.config"

export const rootApi: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT
})
