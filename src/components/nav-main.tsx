import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NAV_DATA_LIST } from "@/constants/nav";
import { Link } from "react-router-dom";

export function NavMain() {
  return NAV_DATA_LIST.map((v) => {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>{v.groupName}</SidebarGroupLabel>
        <SidebarMenu>
          {v.items.map((v2) => {
            return (
              <SidebarMenuItem key={v2.title}>
                <SidebarMenuButton render={<Link to={v2.url} />}>
                  <span>{v2.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    );
  });
}
