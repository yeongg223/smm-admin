import { httpClient } from "@/lib/http-client";

export const signInAdminApi = async (username: string, password: string) => {
  await httpClient.post("/admin/sign-in", {
    username,
    password,
  });
};
