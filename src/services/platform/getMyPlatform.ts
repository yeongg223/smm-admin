import { httpClient } from "@/lib/http-client";

export const getMyPlatform = async () => {
  const response = await httpClient.get("/platform/my");
  return response.data as SiteDetail;
};
