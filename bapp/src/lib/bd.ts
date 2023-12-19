import { Prisma, PrismaClient } from "bd";

const fullNameResult = {
  needs: {
    name: true,
    lastName: true,
  },
  compute: ({ name, lastName }: { name: string; lastName: string }) => {
    return `${name} ${lastName}`;
  },
};
const fullNameExtension = Prisma.defineExtension({
  result: {
    user: {
      fullName: fullNameResult,
    },
    supplier: {
      fullName: fullNameResult,
    },
    client: {
      fullName: fullNameResult,
    },
  },
});
export const prismaClient = new PrismaClient().$extends(fullNameExtension);

export type BdType = typeof prismaClient;
export default prismaClient;
