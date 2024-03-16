import { createJobOpeningAction } from "@/actions/company/createJobOpeningAction"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const CreateJobForm = ({ company_id }: { company_id: string }) => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Create Job Opening</CardTitle>
        <CardDescription>Create a new job opening for your company</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createJobOpeningAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">Role</Label>
              <Input name="role" placeholder="Frontend developer" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="job_description">Job Description</Label>
              <Textarea name="job_description" placeholder="We are looking for..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input name="location" placeholder="123, ABC Street" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="exp_required">Experience Required</Label>
              <Select name="exp_required">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">0-1</SelectItem>
                  <SelectItem value="2">{"2+"}</SelectItem>
                  <SelectItem value="3">{"3+"}</SelectItem>
                  <SelectItem value="5">{"5+"}</SelectItem>
                  <SelectItem value="10">{"10+"}</SelectItem>
                  <SelectItem value="15">{"15+"}</SelectItem>
                  <SelectItem value="20">{"20+"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mode">Mode</Label>
              <Select name="mode">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="ONSITE">On-site</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                  <SelectItem value="REMOTE">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="openings">Number of Openings</Label>
              <Input name="openings" placeholder="2" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skills">Skills required</Label>
              <Textarea name="skills" placeholder="We are looking for..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="registration_deadline">Application deadline</Label>
              <Input name="registration_deadline" className="w-full" type="datetime-local" />
            </div>
          </div>
          <input className="hidden" name="company_id" defaultValue={company_id} />
          <Button className="w-full mt-4">Publish</Button>
        </form>
      </CardContent>
    </Card>
  )
}