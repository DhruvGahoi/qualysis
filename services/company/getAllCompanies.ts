import { prisma } from "@/lib/prisma";

export const getAllCompanies = async () => {
  try {
    const response = await prisma.company.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};
