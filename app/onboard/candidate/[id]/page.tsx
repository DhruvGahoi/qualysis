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
export default async function CandidateOnboardPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Candidate Details</CardTitle>
          <CardDescription>Tell us more about yourself to find best jobs for you!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="resume_url">Resume link</Label>
                <Input name="resume_url" placeholder="https://abc.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="linkedin_url">Linkedin Profile</Label>
                <Input id="linkedin_url" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="github_url">Github Profile</Label>
                <Input id="github_url" placeholder="https://github.com/username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="portfolio_url">Portfolio Website</Label>
                <Input id="portfolio_url" placeholder="https://abc.me" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Company Email</Label>
                <Input id="location" placeholder="123, ABC street, XYZ (221123)" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="website_url">Website</Label>
                <Input id="website_url" placeholder="https://abc.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Your Role</Label>
                <Select name="status">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="UNEMPLOYED">Job Seeker</SelectItem>
                    <SelectItem value="EMPLOYED">Employeed</SelectItem>
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