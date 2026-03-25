import { useController } from "react-hook-form";
import { InputField, type InputFieldProps } from "./InputField";

export type FormInputFieldProps = Omit<
  InputFieldProps,
  "error" | "onChange" | "value" | "pattern"
> & {
  name: string;
  pattern?: RegExp;
};

export const FormInput = ({ name, pattern, ...props }: FormInputFieldProps) => {
  const {
    field: { onBlur, onChange, ref, value, disabled },
    fieldState: { error },
  } = useController({
    name,
    defaultValue: props.defaultValue,
    disabled: props.disabled,
    rules: {
      required: {
        message: "필수 값 입니다",
        value: props.required ?? false,
      },
      minLength: props.minLength
        ? {
            message: `최소 ${props.minLength}글자이상 입력해야합니다`,
            value: props.minLength,
          }
        : undefined,
      maxLength: props.maxLength
        ? {
            message: `최대 ${props.maxLength}글자까지 입력가능합니다`,
            value: props.maxLength,
          }
        : undefined,
      pattern: pattern
        ? {
            message: "형식에 맞지 않습니다",
            value: pattern,
          }
        : undefined,
    },
  });

  return (
    <InputField
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={value}
      disabled={disabled}
      name={name}
      error={error?.message}
      {...props}
    />
  );
};
