import { httpClient } from "@/lib/http-client";

export const getMyApi = async () => {
  const response = await httpClient.get<Admin>("/admin/my");

  return response.data;
};
