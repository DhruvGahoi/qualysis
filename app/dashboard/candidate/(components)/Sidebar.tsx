import { Avatar } from "@/components/ui/avatar"
import { CalendarIcon, ClockIcon, HomeIcon, UserIcon } from "lucide-react"
import Link from "next/link"


export default function SideBar() {
    return ( 
        <div className="md:col-span-3 grid gap-3 z-10">
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
            <ClockIcon className="h-5 w-5" />
            Openings
          </Link>
          <Link className="text-sm font-medium rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900" href="#">
            <UserIcon className="h-5 w-5" />
            Profile
          </Link>
        </nav>
      </div>
    )
}