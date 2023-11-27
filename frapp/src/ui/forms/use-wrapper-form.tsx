import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";

export type UseWrapperFormProps<Values extends FieldValues> = Exclude<
  Parameters<typeof useForm<Values, any>>[0],
  undefined
> & {
  schema: any;
};
export const useWrapperForm = <Values extends FieldValues>(props: UseWrapperFormProps<Values>) => {
  const result = useForm({
    ...props,
    mode: "onBlur",
    resolver: props?.schema ? zodResolver(props.schema) : undefined,
  });
  return result;
};
