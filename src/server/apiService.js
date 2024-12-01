import axiosInstance from './apiClient'

export const postLogin = (data = {}) => axiosInstance.post(import.meta.env.VITE_APP_LOGIN, data)
export const postRegister = (data = {}) => axiosInstance.post(import.meta.env.VITE_APP_REGISTER, data)
export const getAllExercises = () => axiosInstance.get(import.meta.env.VITE_APP_GET_EXERCISES)
export const searchExercise = (data) => axiosInstance.post(import.meta.env.VITE_API_SEARCH_EXERCISE, data)