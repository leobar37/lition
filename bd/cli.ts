import { Command } from "commander";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const program = new Command();

program
  .command("addadmin")
  .argument("<username>", "username")
  .argument("<password>", "password")
  .action(async (user, passoword) => {
    const prismaClient = new PrismaClient();
    await prismaClient.user.create({
      data: {
        username: user,
        password: await bcrypt.hash(passoword, 10),
        name: "admin",
        lastName: "admin",
        roles: ["SUPER_ADMIN"],
      },
    });
    console.log("Admin created");
  });

program.parse();
