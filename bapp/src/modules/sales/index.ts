import { router } from "../../router";
import * as childProducedures from "./functions";

export const sales = router({
  ...childProducedures,
});
