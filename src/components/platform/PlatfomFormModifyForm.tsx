import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getCdnUrl } from "@/constants/cdn";
import { errorHandler } from "@/lib/http-client";
import { updatePlatformImage } from "@/services/platform/updatePlatformImage";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export const PlatformModifyForm = ({ site }: { site: SiteDetail }) => {
  const [favicon, setFavicon] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);

  const formCtx = useForm();

  return (
    <FormProvider {...formCtx}>
      <Card className="border rounded-lg">
        <CardHeader className="border-b">이미지</CardHeader>
        <CardContent className="grid grid-cols-3 gap-2 p-2">
          <Field>
            <FieldLabel>
              <HoverCard>
                <HoverCardTrigger
                  delay={1}
                  closeDelay={1}
                  className={"underline"}
                >
                  Favicon
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div>ico 확장자의 아이콘 파일을 업로드하세요</div>
                </HoverCardContent>
              </HoverCard>
            </FieldLabel>

            <FieldContent>
              <img src={getCdnUrl(`/${site.id}/favicon.ico`)} />
            </FieldContent>
            <InputGroup className="h-10 px-2">
              <InputGroupInput
                type="file"
                accept=".ico"
                onChange={(e) => {
                  setFavicon(e.target.files![0]);
                }}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="default"
                  onClick={async () => {
                    if (!favicon) {
                      toast.error("이미지를 업로드후 저장해주세요");
                      return;
                    }

                    try {
                      await updatePlatformImage({
                        siteId: site.id,
                        type: "favicon",
                        file: favicon,
                      });

                      toast.success("Favicon을 수정했습니다");
                    } catch (error) {
                      errorHandler(error);
                    }
                  }}
                >
                  저장
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel>
              <HoverCard>
                <HoverCardTrigger
                  delay={1}
                  closeDelay={1}
                  className={"underline"}
                >
                  로고 이미지
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div>png 확장자의 이미지 파일을 업로드하세요</div>
                </HoverCardContent>
              </HoverCard>
            </FieldLabel>
            <FieldContent>
              <img src={getCdnUrl(`/${site.id}/logo.png`)} />
            </FieldContent>
            <InputGroup className="h-10 px-2">
              <InputGroupInput
                type="file"
                accept=".png"
                onChange={(e) => {
                  setLogo(e.target.files![0]);
                }}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="default"
                  onClick={async () => {
                    if (!logo) {
                      toast.error("이미지를 업로드후 저장해주세요");
                      return;
                    }

                    try {
                      await updatePlatformImage({
                        siteId: site.id,
                        type: "logo",
                        file: logo,
                      });

                      toast.success("로고를 수정했습니다");
                    } catch (error) {
                      errorHandler(error);
                    }
                  }}
                >
                  저장
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </CardContent>
      </Card>
      <div className="h-[40000px]"></div>
    </FormProvider>
  );
};
