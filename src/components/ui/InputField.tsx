import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "./input";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  description?: string;
  error?: string;
  title?: string;
}

export const InputField = ({
  name,
  placeholder,
  description,
  error,
  title,
  value = "",
  onChange,
  disabled,
  readOnly,
  ...props
}: InputFieldProps) => {
  const hasSubtitle = error ?? description;

  return (
    <Field className="gap-1">
      <FieldLabel htmlFor={name}>
        <div>
          {props.required && <span className="text-red-500 mr-1">*</span>}
          {title}
        </div>
      </FieldLabel>
      <Input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
      {hasSubtitle && (
        <FieldDescription className={"text-xs flex justify-between"}>
          {description && <span>{description}</span>}
          {error && <span className="text-red-500">{error}</span>}
        </FieldDescription>
      )}
    </Field>
  );
};
