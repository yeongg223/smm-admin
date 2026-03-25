import { myAtom } from "@/atoms/my.atom";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { logOutApi } from "@/services/common/logoutApi";
import { useAtomValue } from "jotai";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function MyInfo() {
  const { username, siteName } = useAtomValue(myAtom)!;

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center p-2 border-b">
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">{username}</span>
          <span className="truncate text-xs">{siteName ?? "-"}</span>
        </div>
        <Button
          variant={"outline"}
          onClick={async () => {
            try {
              await logOutApi();
              window.location.href = "/login";
            } catch {
              //
            }
          }}
        >
          <LogOut className="size-[14px]" />
        </Button>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
