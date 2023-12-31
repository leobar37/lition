import { Box, Button, HStack } from "@chakra-ui/react";
import { BussinessInput, bussinessSchema } from "@lition/common";
import { getQueryKey } from "@trpc/react-query";
import { pick } from "radash";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, useLitionFeedback } from "~/lib";
import { FormInput, Screen, WrapperForm, useWrapperForm } from "~/ui";
import { useQueryClient } from "@tanstack/react-query";
export const useBusiness = () => {
  const { id = "-1" } = useParams();
  const safeId = Number(id);

  return api.me.one.useQuery(
    {
      bussinessId: safeId,
    },
    {
      enabled: safeId >= 0,
    }
  );
};
export const UpdateBusiness = () => {
  const updateBussiness = api.me.update.useMutation();
  const { wrapAsync } = useLitionFeedback();
  const navigate = useNavigate();
  const listQueryKey = getQueryKey(api.me.list);

  const queryClient = useQueryClient();
  const businessQuery = useBusiness();

  const form = useWrapperForm<BussinessInput>({
    schema: bussinessSchema,
  });

  useEffect(() => {
    const data = businessQuery.data;
    if (data) {
      form.reset(pick(data, ["name", "code"]), {
        keepDirty: true,
      });
    }
  }, [businessQuery.data]);

  const onSubmit = form.handleSubmit(async (values) => {
    const action = async () => {
      await updateBussiness.mutateAsync({
        id: businessQuery.data?.id ?? -1,
        input: values,
      });
      form.reset();
      navigate("/business");
      queryClient.invalidateQueries(listQueryKey);
    };
    await wrapAsync(action());
  });

  const buttonDisable =
    !form.formState.isValid ||
    form.formState.isSubmitting ||
    !form.formState.isDirty;

  return (
    <Screen back="/business" title="Editar negocio">
      <WrapperForm form={form}>
        <Box>
          <FormInput label="Nombre" name="name" />
          <FormInput label="Codigo" name="code" />
          <HStack mt="3" justifyContent={"flex-end"}>
            <Button
              isLoading={updateBussiness.isLoading}
              isDisabled={buttonDisable}
              colorScheme="blue"
              onClick={onSubmit}
            >
              Editar
            </Button>
          </HStack>
        </Box>
      </WrapperForm>
    </Screen>
  );
};
