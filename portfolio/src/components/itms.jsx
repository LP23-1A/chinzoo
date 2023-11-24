let data = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSID-bEL6ftUrkTW44YoP1PbYHYGfSGwDf_IJsl8gnW-k79URmPz330BmA&usqp=CAU",
        content: "Javascript"
        
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbErme3WHnTAJjqqKRVlsnc6gfSTHFS_AfRA&usqp=CAU",
        content: "Typescript"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvtTxPIRZbwKP8Ash1-sqsfz3dIsUBjTkCj8NREhcFvrsSI1n&usqp=CAU",
        content: "React"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfJnNl2Wug-0lSOxYWt4rzEHTpqgyA9fdp3IzDx9FLzxypuIEd24bt7w&usqp=CAU",
        content: "Next.js"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgXjuqG9BKVB_j1e3-nrYR4ZbgUrc3e1MWw&usqp=CAU",
        content: "Node.js"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyirXWNVW_MHg9zIae2X6ORKQ7Y4Da17ocIByDjHoDVBzAPY7kycd8Lg&usqp=CAU",
        content: "Express.js"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJga6aTF6YKMo3dU4K9aJ9T2AtiKpwQ-DK9MPiK3mkoFoUf5P8Eltz4fE&usqp=CAU",
        content: "Nest.js"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLa8POD_9DJZcAPG2YC2QFrQUUO-hgHeXV_y-c4fWsvR0ONThIxXQ_iRc&usqp=CAU",
        content: "Socket.io"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V9h0YPPf0o-faAi5mrr7-x3ZjkgcdCkPKA&usqp=CAU",
        content: "PostgreSQL"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOss7W7UY7VzU0Hr2RcO7YZRyUxyoPMDYtInwxWJ7ZJiVx1dSUPH3lEM&usqp=CAU",
        content: "MongoDB"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcD6zS9NNmF2AlX_5iq60AtoALG37OcIaf3ED6Rg1RzoScpAdq&usqp=CAU",
        content: "Sass/Scss"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7VCcGzSiAxtDIVPOLCwV7QSsbUwxewQ7rYdEiNeoZ8Q2seNM-LNTXOc&usqp=CAU",
        content: "Tailwindcss"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBZYbMoIv0_joV80G3LomwsLYCjKVKSM8qA&usqp=CAU",
        content: "Figma"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjTWCMA89ZhtfdsV4bBMZ0iuOkKwdcos4PQ9KzDiiRhJTLTwr63Wxo44&usqp=CAU",
        content: "Cypress"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhJpb-tKBu1AG8-utYD48p4YV2LCpwSL4njhpqqZG4iaVuYDTzvjKOns&usqp=CAU",
        content: "Storybook"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRR_hKxH2Tu-ONxCp35DIkyfH_8XEDZ0gKbA&usqp=CAU",
        content: "Git"
    },
] 

export default function  Itms() {
    return(
        <>
        {
            data.map((el) => {
                return (
                    <div className="Icon-dev">
                        <img className="img-icons" src={el.url} alt="" />
                        <p>{el.content}</p>
                    </div>
                )
            })
        }
        </>
    )
}

