import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "@/components/ui/FormInputField";
import { errorHandler } from "@/lib/http-client";
import { ID_RULES, PASSWORD_RULES } from "@/lib/regexp";
import { getMyApi } from "@/services/admin/getMyApi";
import { signInAdminApi } from "@/services/admin/signInAdminApi";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const LoginPage = () => {
  const { data: my, isLoading } = useQuery({
    queryKey: ["my"],
    queryFn: getMyApi,
    retry: false,
  });

  const navigate = useNavigate();
  const formCtx = useForm<{ username: string; password: string }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  if (isLoading) return null;

  if (my) {
    return <Navigate to="/" replace />;
  }

  return (
    <FormProvider {...formCtx}>
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-2xl text-center">로그인</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormInput
              name="username"
              title="아이디"
              className="h-11"
              placeholder="ID"
              required
              minLength={ID_RULES.min}
              maxLength={ID_RULES.max}
              pattern={ID_RULES.regexp}
              description="영어 대/소문자, 숫자"
            />
            <FormInput
              name="password"
              title="비밀번호"
              className="h-11"
              type="password"
              placeholder="PASSWORD"
              required
              minLength={PASSWORD_RULES.min}
              maxLength={PASSWORD_RULES.max}
              pattern={PASSWORD_RULES.regexp}
              description="영어 대/소문자, 숫자, !@#$"
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () => {
                const result = await formCtx.trigger();
                if (!result) return;

                const { username, password } = formCtx.getValues();

                try {
                  await signInAdminApi(username, password);
                  toast.success("로그인에 성공했습니다");
                  navigate("/");
                } catch (error) {
                  errorHandler(error);
                }
              }}
              className="w-full"
              size={"lg"}
            >
              LOGIN
            </Button>
          </CardFooter>
        </Card>
      </div>
    </FormProvider>
  );
};
