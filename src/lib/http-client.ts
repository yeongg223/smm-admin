import axios, { AxiosError } from "axios";
import { IS_DEV } from "./env";
import { toast } from "sonner";

export const httpClient = axios.create({
  baseURL: IS_DEV
    ? "http://localhost:3000"
    : `https://api.${window.location.hostname}`,
  withCredentials: true,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export const errorHandler = (e: any) => {
  if (e instanceof AxiosError) {
    const errorMessage = e.response?.data?.message;

    if (errorMessage && /[ㄱ-ㅎ가-힣]/.test(errorMessage)) {
      toast.error(errorMessage);
      return;
    }
  }

  toast.error("오류가 발생했습니다");
};
