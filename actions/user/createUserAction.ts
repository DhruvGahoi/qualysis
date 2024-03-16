"use server";

import { createUser } from "@/services/user/createUser";
import { userRole } from "@prisma/client";
import { redirect } from "next/navigation";

export const createUserAction = async (formData: FormData) => {
  const role = formData.get("role") as userRole;
  const resposne = await createUser({
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    profile_image_url: (formData.get("profile_image_url") as string) || null,
    status: role === "CANDIDATE" ? "UNEMPLOYED" : "EMPLOYED",
    role,
  });

  if (resposne !== undefined) {
    if (role === "CANDIDATE") {
      redirect(`/onboard/candidate/${resposne.id}`);
    } else if (role == "COMPANY") {
      redirect(`/onboard/company/${resposne.id}`);
    } else {
      redirect(`/onboard/employee/${resposne.id}`);
    }
  } else {
    console.log("Error creating user");
  }
};
