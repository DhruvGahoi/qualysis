import AcceptanceEmail from "@/emails/acceptance";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["danimahendra0904@gmail.com"],
      subject: "Hello world",
      react: AcceptanceEmail({
        candidateName: "Mahendra Dani",
        companyName: "Famazon",
        role: "Software developer intern",
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
