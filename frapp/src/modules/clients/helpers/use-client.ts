import { useParams } from "react-router-dom";
import { api } from "~/lib";

export const useClient = () => {
  const { id = null } = useParams();
  const safeId = id ? Number(id) : -1;

  const clientQuery = api.clients.one.useQuery(safeId, {
    enabled: safeId > 0,
  });
  console.log("data-query", {
    safeId: safeId,
    data: clientQuery.data,
  });

  return clientQuery;
};
