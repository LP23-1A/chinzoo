const buttons = [
    {
        name: "React"
    },
    {
        name: "Next.js"
    },
    {
        name: "Typescript"
    },
    {
        name: "Nest.js"
    },
    {
        name: "PostgreSQL"
    },
    {
        name: "Tailwindcss"
    },
    {
        name: "Figma"
    },
    {
        name: "Cypress"
    },
    {
        name: "Storybook"
    },
    {
        name: "Git"
    },
]
export default function Button() {
    return(
        <>
        {buttons.map((el) => {
        return (
            <div>
                <button className="bg-black text-white p-[8px] rounded-[4px]">
                    <p className="buttp">{el.name}</p>
                </button>
            </div>
        );
      })}
        </>
    )
}

