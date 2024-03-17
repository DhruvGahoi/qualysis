import { Avatar } from "@/components/ui/avatar"
import { CalendarIcon, ClockIcon, HomeIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { SidebarLinks } from "./sidebar-links"

export const CompanySidebar = () => {
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

      <SidebarLinks />
    </div>
  )
}