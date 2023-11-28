import { useParams } from "react-router-dom";

export const useProductIdUnitAlias = () => {
  const { productId } = useParams();
  return productId;
};
