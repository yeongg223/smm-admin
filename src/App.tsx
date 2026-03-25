import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "./AuthLayout";
import { Toaster } from "./components/ui/sonner";
import { DashboardLayout } from "./DashboardLayout";
import { ChildenPlatformPage } from "./pages/ChildrenPlatfomPage";
import { DashboadPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { MyPlatformPage } from "./pages/MyPlatfomPage";

type ToastType = "success" | "error" | "warning" | "info";

const styleMap: Record<ToastType, string> = {
  success: "!border-green-600 !text-white",
  error: "!border-red-600 !text-white",
  warning: "!border-yellow-500 !text-black",
  info: "!border-blue-600 !text-white",
};

function proxyToast<T extends (...args: any[]) => any>(
  original: T,
  type: ToastType,
) {
  return (...args: any[]) => {
    const option = args[1] ?? {};
    return original(args[0], {
      ...option,
      className: `${styleMap[type]} ${option.className ?? ""}`,
    });
  };
}

toast.success = proxyToast(toast.success, "success");
toast.error = proxyToast(toast.error, "error");
toast.warning = proxyToast(toast.warning, "warning");
toast.info = proxyToast(toast.info, "info");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Toaster position="top-center" />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AuthLayout />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboadPage />} />
                <Route path="/platform/my" element={<MyPlatformPage />} />
                <Route
                  path="/platform/children"
                  element={<ChildenPlatformPage />}
                />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to={"/login"} replace />} />
          </Routes>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
