import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { CalendarIcon, ClockIcon, HomeIcon, UserIcon } from "lucide-react"
import { CreateJobForm } from "./form"
import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { redirect } from "next/navigation"

interface iCompanyDashboardPageParams {
  params: {
    id: string
  }
}
export default async function CompanyDashboardPage({ params }: iCompanyDashboardPageParams) {
  const { exists, data } = await getCompanyByCuid({ id: params.id })
  if (!exists) {
    redirect("/")
  }

  return (
    <main className="w-full flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-2xl">COMPANY DETAILS</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>

      </div>
      <div>
        <h1 className="text-2xl">CREATE JOB</h1>
        <CreateJobForm company_id={params.id} />
      </div>
    </main>
  )
}