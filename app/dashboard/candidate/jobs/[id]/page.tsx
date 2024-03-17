import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getCompanyByCuid } from "@/services/company/getCompanyByCuid"
import { getJobsCreatedByCompanyCuid } from "@/services/jobs/getJobsCreatedByCompanyCuid"
import { redirect } from "next/navigation"
import { getAllJobs } from "@/services/jobs/getAllJobs"

export default async function JobsPage() {
  const jobs = await getAllJobs();
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Active Job Posts</h1>
      <div className="flex flex-col justify-between items-start gap-6">
        {jobs?.map((job, i) => (
          <Card className="w-[45rem]" key={i}>
            <CardHeader>
              <CardTitle>{job.role}</CardTitle>
              <CardDescription>{job.job_description}</CardDescription>
            </CardHeader>
            <CardContent className=" text-gray-500">
              <div>{"Years of Experience Required: "} {job.exp_required}</div>
              <div>{"Status:"} {job.is_closed ? <Badge>Closed</Badge> : <Badge>Open</Badge>}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}