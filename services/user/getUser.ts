import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserById = async ({ id }: Pick<User, "id">) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
