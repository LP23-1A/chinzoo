import Link from "next/link"

const menus = [
   {
    link: "login",
    title: "Login"
   },
   {
    link: "sign_up",
    title: "Sign up"
   }
]

export default function Home (){
    return(
        <main>
            <header>
                {menus.map((menu, index)=>(
                    <Link key={menu.link+index} href={menu.link}>
                        {menu.title}
                    </Link>
                ))}
            </header>
        </main>
    )
}