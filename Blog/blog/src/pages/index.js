import Navbar from "@/components/Navbar"
import Carsoule from "@/components/Carsoule"
import Trending from "@/components/Trending"
import Allblogpost from "@/components/Allblogpost"

export default function Home() {
  return (
    <main className="`body max-w-[1917px]`flex justify-center">
        <div className="flex flex-col gap-[100px]">
          <Navbar/>
          <Carsoule/>
          <Trending/>
          <Allblogpost/>
        </div>
    </main>
  )
}
