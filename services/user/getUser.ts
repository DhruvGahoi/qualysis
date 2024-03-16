import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserById = async ({ id }: Pick<User, "id">) => {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (response != null) {
      return { exists: true, data: null };
    }
    return { exists: false, data: response };
  } catch (error) {
    console.log(error);
    return { exists: undefined, data: null };
  }
};
