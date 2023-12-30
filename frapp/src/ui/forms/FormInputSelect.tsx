import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Select as SelectChakra,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, Fragment } from "react";
import ReactSelect, { Props } from "react-select";
import { useIsMobile } from "~/ui/hooks";
import { FormInputOptions, useSetupControl } from "./use-setup-control";
type FormInputSelectProps = {
  options: {
    label: string;
    value: string | number;
  }[];
  inputProps?: Props;
} & FormInputOptions;

const Select = chakra(ReactSelect);
const MobileSelect: FC<Props> = ({ ...props }) => {
  const disclousure = useDisclosure();
  const option = props.value as any;

  return (
    <Fragment>
      <SelectChakra
        value={props?.value as any}
        onClick={() => {
          disclousure.onOpen();
        }}
      >
        {option && <option value={option?.value}>{option?.label}</option>}
      </SelectChakra>

      <Drawer {...disclousure} placement="bottom">
        <DrawerOverlay />
        <DrawerContent minHeight={"90vh"}>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Select
              {...props}
              menuIsOpen
              onChange={(value, opt) => {
                props.onChange?.(value, opt);
                disclousure.onClose();
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export const FormInputSelect: FC<FormInputSelectProps> = ({
  options,
  isDisabled,
  inputProps = {},
  ...props
}) => {
  const { Wrapper, field } = useSetupControl(props);
  const value = options.find((opt) => opt.value === field.value);
  const isMobile = useIsMobile();

  const selectProps = {
    isDisabled,
    options,
    ...field,
    value,
    onChange: (val: any) => {
      field.onChange({
        target: {
          value: val?.value,
        },
      });
    },
    ...inputProps,
  };

  const select = isMobile ? (
    <MobileSelect {...selectProps} />
  ) : (
    <Select {...selectProps} />
  );
  return <Wrapper>{select}</Wrapper>;
};
