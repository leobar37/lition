import { useAtom } from "jotai";
import { LineSale, linesSaleAtoms } from "../data";
import { useMemo } from "react";
import { normFloat } from "~/utils";

export const useHandleLineSale = () => {
  const [lines, setLines] = useAtom(linesSaleAtoms);

  const add = (line: LineSale) => {
    setLines([...lines, line]);
  };

  const update = (line: Partial<LineSale>, productId: number) => {
    setLines(
      lines.map((l) => {
        if (l.productId === productId) {
          return {
            ...l,
            ...line,
          };
        }
        return l;
      })
    );
  };

  const clear = () => {
    setLines([]);
  };
  const deleteLine = (productId: number) => {
    setLines(lines.filter((l) => l.productId !== productId));
  };

  const getTotal = useMemo(
    () => () => normFloat(lines.reduce((acc, line) => acc + line.total!, 0)),
    [lines]
  );

  const getTotalAndOmitLineWithId = useMemo(
    () => () =>
      normFloat(
        lines.filter((d) => !d.id).reduce((acc, line) => acc + line.total!, 0)
      ),
    [lines]
  );

  return {
    add,
    update,
    deleteLine,
    lines,
    clear,
    getTotal,
    setLines,
    getTotalAndOmitLineWithId,
  };
};
