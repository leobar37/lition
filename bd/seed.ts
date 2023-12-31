import { faker } from "@faker-js/faker";
import { Roles } from "@lition/common";
import {
  Client,
  PrismaClient,
  Product,
  Supplier,
  Unit,
  User,
} from "@prisma/client";
import * as bcrypt from "bcrypt";

import { range } from "radash";

const prismaClient = new PrismaClient();

const createClient = ({
  businessId,
  bussinessName,
}: {
  businessId: number;
  bussinessName: string;
}): Client => {
  return {
    name: faker.person.firstName() + bussinessName,
    lastName: faker.person.lastName(),
    dni: faker.string.alphanumeric(8),
    email: faker.internet.email(),
    phone: faker.string.numeric(9),
    businessId: businessId,
  } as Client;
};

const createSupplier = ({
  businessId,
  bussinessName,
}: {
  businessId: number;
  bussinessName: string;
}): Supplier => {
  return {
    name: faker.person.firstName() + bussinessName,
    lastName: faker.person.lastName(),
    dni: faker.string.alphanumeric(8),
    email: faker.internet.email(),
    phone: faker.string.numeric(9),
    businessId: businessId,
  } as Supplier;
};

const UNITS: Partial<Unit>[] = [
  {
    allow_decimal: true,
    name: "Kilogramo",
    symbol: "kg",
  },
  {
    allow_decimal: false,
    name: "Unidad",
    symbol: "u",
  },
];

const USERS: Partial<User>[] = [
  {
    username: "user1",
    lastName: "Lastname1",
    name: "Name1",
    password: "password1",
  },
];

const PRODUCTS: Partial<
  Product & {
    unitName: string;
  }
>[] = [
  {
    name: "Pollo",
    unitName: "Kilogramo",
  },
  {
    name: "Huevos",
    unitName: "Unidad",
  },
];

async function main() {
  // create units
  for await (const unit of UNITS) {
    await prismaClient.unit.upsert({
      where: {
        name: unit.name,
      },
      update: {},
      create: {
        name: unit.name ?? "",
        allow_decimal: unit.allow_decimal ?? false,
        symbol: unit.symbol ?? "",
      },
    });
  }

  // create a business
  const businessResult = await prismaClient.business.upsert({
    where: {
      code: "tanchi",
    },
    create: {
      name: "Tanchi",
      code: "tanchi",
    },
    update: {},
  });

  // create products
  for await (const product of PRODUCTS) {
    const unit = await prismaClient.unit.findFirst({
      where: {
        name: product.unitName,
      },
    });
    if (!unit) {
      throw new Error("Unit not found");
    }
    await prismaClient.product.upsert({
      where: {
        name: product.name,
      },
      update: {},
      create: {
        name: product.name ?? "",
        unitId: unit.id,
        businessId: businessResult.id,
      },
    });
  }

  // clients
  for await (const _iter of range(0, 50)) {
    const fakeClient = createClient({
      businessId: businessResult.id,
      bussinessName: businessResult.name,
    });
    await prismaClient.client.create({
      data: fakeClient,
    });
  }

  // suppliers
  for await (const _iter of range(0, 50)) {
    const fakeClient = createSupplier({
      businessId: businessResult.id,
      bussinessName: businessResult.name,
    });
    await prismaClient.supplier.create({
      data: fakeClient,
    });
  }

  // create users
  for await (const user of USERS) {
    await prismaClient.user.upsert({
      where: {
        username: user.username,
      },
      create: {
        name: user.name ?? "",
        lastName: user.lastName ?? "",
        username: user.username ?? "",
        password: await bcrypt.hash(user.password ?? "", 10),
        roles: [Roles.ADMIN],
        businessId: businessResult.id,
      },
      update: {},
    });
  }
}
main();
