import { httpClient } from "@/lib/http-client";

export const logOutApi = async () => {
  await httpClient.get("/common/logout");
};
