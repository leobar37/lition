import { PrismaClient, Unit, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Roles } from "@lition/common";
import { faker } from "@faker-js/faker";
import { range } from "radash";
const prismaClient = new PrismaClient();
import { Client } from "@prisma/client";
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

const UNITS: Partial<Unit>[] = [
  {
    allow_decimal: true,
    name: "Kilogram",
  },
  {
    allow_decimal: false,
    name: "Unit",
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

  for await (const _iter of range(0, 10)) {
    const fakeClient = createClient({
      businessId: businessResult.id,
      bussinessName: businessResult.name,
    });
    await prismaClient.client.create({
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
