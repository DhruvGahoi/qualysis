"use server";

import { disapproveEmployee } from "@/services/company/disapproveEmployee";
import { revalidatePath } from "next/cache";

export const approveEmployeeAction = async (formdata: FormData) => {
  const response = await disapproveEmployee({
    user_id: formdata.get("user_id") as string,
    id: formdata.get("id") as string,
  });

  // TODO : write correct path here
  revalidatePath("/");
};
