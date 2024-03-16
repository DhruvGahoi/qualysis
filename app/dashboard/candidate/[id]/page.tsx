
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid md:grid-cols-12 items-start gap-6 w-full max-w-7xl px-6 py-6 mx-auto">
      <div className="md:col-span-3 grid gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
          </Avatar>
          <div className="flex flex-col">
            <div className="font-semibold line-clamp-1">Lana Brown</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Interviewee</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <Link
            className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
            href="#"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900" href="#">
            <CalendarIcon className="h-5 w-5" />
            Calendar
          </Link>
          <Link className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900" href="#">
            <ClockIcon className="h-5 w-5" />
            History
          </Link>
          <Link className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900" href="#">
            <UserIcon className="h-5 w-5" />
            Profile
          </Link>
        </nav>
      </div>
      <div className="md:col-span-9 grid gap-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Upcoming Interviews</h1>
          {/* <Button size="sm" variant="outline">
            <PlusIcon className="h-4 w-4 -translate-x-0.5 mr-2" />
            Schedule
          </Button> */}
        </div>
        <div className="grid gap-4">
          <Card>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="font-semibold">Google Product Manager</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Sarah Johnson</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium m-0">Date</div>
                    <div className="m-0">Tomorrow, 10:00 AM</div>
                  </div>
                </div>
              </div>
              <Button className="w-24 h-24 flex items-center justify-center" variant="outline">
                Join
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="font-semibold">Facebook UX Designer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Alex Lee</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium m-0">Date</div>
                    <div className="m-0">Today, 3:00 PM</div>
                  </div>
                </div>
              </div>
              <Button className="w-24 h-24 flex items-center justify-center" variant="outline">
                Join
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">Past Interviews</h2>
            <Link className="text-sm underline ml-auto" href="#">
              View all
            </Link>
          </div>
          <Card>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="font-semibold">Amazon Software Engineer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Mark Smith</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium m-0">Date</div>
                    <div className="m-0">March 10, 2024, 2:00 PM</div>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex-1">
                <CardHeader className="pb-2">
                  <div className="font-semibold">Apple Marketing Manager</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Interview with: Emily White</div>
                </CardHeader>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium m-0">Date</div>
                    <div className="m-0">February 28, 2024, 11:00 AM</div>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}

function CalendarIcon(props : CalendarIconProps ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

interface ClockIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}

function ClockIcon(props : ClockIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}


function HomeIcon(props : HomeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}

function PlusIcon(props : PlusIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
    // Add any specific props for your component here
}

function UserIcon(props : UserIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
