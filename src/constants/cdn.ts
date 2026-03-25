import { IS_DEV } from "@/lib/env";

const CDN_BASE_URL = IS_DEV
  ? "https://smm-pannel-yg.s3.ap-northeast-2.amazonaws.com"
  : "";

export const getCdnUrl = (key: string) => {
  if (key.startsWith("/")) {
    return CDN_BASE_URL + key;
  }

  return CDN_BASE_URL + "/" + key;
};
