import { Spinner } from "./ui/spinner";

export const LoadingView = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="size-6" />
    </div>
  );
};
