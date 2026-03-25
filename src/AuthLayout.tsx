import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { myAtom } from "./atoms/my.atom";
import { getMyApi } from "./services/admin/getMyApi";

export const AuthLayout = () => {
  const [_my, setMy] = useAtom(myAtom);
  const {
    data: my,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my"],
    queryFn: () => {
      return getMyApi();
    },
  });

  useEffect(() => {
    if (!my) return;

    document.title = my.siteName ?? "SMM 패널 어드민";

    setMy(my);
  }, [my, setMy]);

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return (
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return _my && <Outlet />;
};
