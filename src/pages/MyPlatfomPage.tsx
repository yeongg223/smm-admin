import { LoadingView } from "@/components/LoadingView";
import { PlatformModifyForm } from "@/components/platform/PlatfomFormModifyForm";
import { getMyPlatform } from "@/services/platform/getMyPlatform";
import { useQuery } from "@tanstack/react-query";

export const MyPlatformPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["platform", "my"],
    queryFn: () => {
      return getMyPlatform();
    },
  });

  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <div>
      {data ? (
        <PlatformModifyForm site={data} />
      ) : (
        <div>플랫폼이 존재하지 않습니다</div>
      )}
    </div>
  );
};
