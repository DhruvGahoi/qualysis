import Header from "@/app/dashboard/candidate/(components)/Header"
import SideBar from "../(components)/Sidebar"
import UpcomingInterviews from "../(components)/UpcomingInterviews"
import PastInterviews from "../(components)/PastInterviews"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Component() {
  return (
    <main >
      <Header />
      <div className="grid md:grid-cols-12 items-start gap-10 w-full max-w-10xl py-6 px-4 mx-auto">
        <SideBar />
        <div className="md:col-span-9 grid gap-6">
          <UpcomingInterviews />
          <PastInterviews />
        </div>
      </div>
      <BackgroundBeams />
    </main>
  )
}

