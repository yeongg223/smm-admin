import { httpClient } from "@/lib/http-client";

export const updatePlatformImage = async ({
  siteId,
  type,
  file,
}: {
  siteId: number;
  type: string;
  file: File;
}) => {
  const body = new FormData();

  body.append("siteId", siteId.toString());
  body.append("type", type);
  body.append("file", file);

  await httpClient.patch("/platform/image", body);
};
