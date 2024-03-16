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
import { Textarea } from "@/components/ui/textarea"
export default async function CompanyOnboardPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Tell us more about your company to get more reach</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your company" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea name="description" placeholder="Tell us what you do" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Company Email</Label>
                <Input id="email" placeholder="abc@org.ac.in" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Company Email</Label>
                <Input id="location" placeholder="123, ABC street, XYZ (221123)" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="website_url">Website</Label>
                <Input id="website_url" placeholder="https://abc.com" />
              </div>
            </div>
            <Button className="mt-4 w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}