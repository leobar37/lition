import { Box, Button, HStack } from "@chakra-ui/react";
import { api, useLitionFeedback } from "~/lib";
import { Screen, useWrapperForm, WrapperForm, FormInput } from "~/ui";
import { bussinessSchema, BussinessInput } from "@lition/common";
import { useNavigate } from "react-router-dom";
import { getQueryKey } from "@trpc/react-query";
import { useQueryClient } from "@tanstack/react-query";
export const CreateBusiness = () => {
  const createBussiness = api.me.create.useMutation();
  const listQueryKey = getQueryKey(api.me.list);

  const { wrapAsync } = useLitionFeedback();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const form = useWrapperForm<BussinessInput>({
    schema: bussinessSchema,
  });
  const onSubmit = form.handleSubmit(async (values) => {
    const action = async () => {
      await createBussiness.mutateAsync(values);
      form.reset();
      navigate("/business");
      queryClient.invalidateQueries(listQueryKey);
    };
    await wrapAsync(action());
  });
  const buttonDisable = !form.formState.isValid || form.formState.isSubmitting;
  return (
    <Screen back="/business" title="Crear negocio">
      <WrapperForm form={form}>
        <Box>
          <FormInput label="Nombre" name="name" />
          <FormInput label="Codigo" name="code" />
          <HStack mt="3" justifyContent={"flex-end"}>
            <Button
              isLoading={createBussiness.isLoading}
              isDisabled={buttonDisable}
              colorScheme="blue"
              onClick={onSubmit}
            >
              Guardar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
