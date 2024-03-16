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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export default async function EmployeeOnboardPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
          <CardDescription>Tell us more about yourself to find the right interviewee!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="designation">Designation</Label>
                <Input name="designation" placeholder="HR Manager" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="linkedin_url">Linkedin Profile</Label>
                <Input id="linkedin_url" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="github_url">Github Profile</Label>
                <Input id="github_url" placeholder="https://github.com/username" />
              </div>
              <div className="text-red-400">Add a company select here!</div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Years of Experience</Label>
                <Select name="years_of_experience">
                  <SelectTrigger id="years_of_experience">
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
            </div>
            <Button className="mt-4 w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}