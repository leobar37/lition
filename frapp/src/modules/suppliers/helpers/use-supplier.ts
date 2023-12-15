import { useParams } from "react-router-dom";
import { api } from "~/lib";

export const useSupplier = () => {
  const { id = "-1" } = useParams();
  const safeId = Number(id);
  return api.suppliers.one.useQuery(
    {
      id: safeId,
    },
    {
      enabled: safeId > 0,
    }
  );
};
