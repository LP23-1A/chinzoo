import Heroimg2 from "./Heroimg2"
import Home from "@/pages"
export default function About(){
    return(
        <div className="flex flex-col justify-center items-center p-[80px] bg-slate-100 gap-[48px]  w-full dark:text-white dark:bg-[#111827]">
            <div className="top">
                <button className="padding-[16px] bg-zinc-300 rounded-[8px] p-[4px] dark:bg-[#374151]">About me</button>
            </div>
            <div className="flex sm-[flex-wrap]">
                <div className="w-[584px] h-[694px] relative">
                    <div className="w-[400px] h-[480px] dark:bg-[#374151] bg-[#E5E7EB] border-8-white relative top-10 "></div>
                    <Heroimg2/>
                </div>
                <div className="max-w-[514px] border-solid ">
                    <h1>Curious about me? Here you have it:</h1>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p>Finally, some quick bits about me.</p>
                    <div>
                        <ul>
                            <li>B.E. in Computer Engineering</li>
                            <li>Full time freelancer</li>
                        </ul>
                        <ul>
                            <li>Avid learner</li>
                            <li>Aspiring indie hacker</li>
                        </ul>
                    </div>
                    <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>
            </div>
        </div>
    )
}