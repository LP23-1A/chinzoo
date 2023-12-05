import Navbar from "@/components/Navbar"
import Carsoule from "@/components/Carsoule"
import Trending from "@/components/Trending"

import Footer from "@/components/Footer"
import AllBlog from "@/components/AllBlog"

export default function Home() {
  return (
    <main className="`body max-w-[1917px]`flex justify-center items-center">
        <div className="flex flex-col gap-[100px] justify-center items-center">
          <Navbar/>
          <Carsoule/>
          <Trending/>
          <AllBlog/>
        
          <Footer/>
        </div>
    </main>
  )
}
