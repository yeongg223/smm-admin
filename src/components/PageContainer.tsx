import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export const PageContainer = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("", className)} {...props}></div>;
};
