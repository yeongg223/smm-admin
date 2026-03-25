export const NAV_DATA_LIST = [
  {
    groupName: "대시보드",
    items: [
      {
        title: "대시보드",
        url: "/dashboard",
      },
    ],
  },
  {
    groupName: "플랫폼 관리",
    items: [
      {
        title: "내 플랫폼 관리",
        url: "/platform/my",
      },
      {
        title: "하위 플랫폼 관리",
        url: "/platform/children",
      },
    ],
  },
] as Array<{
  groupName: string;
  items: Array<{
    title: string;
    url: string;
  }>;
}>;
