const data = [
    {
        url: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title:"The Impact of Technology on the Workplace: How Technology is Changing"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1702857600&Signature=iMU-7Qz1Mbpq1V~SJFTCy0eim3ir1jjcZ9WuY1jMQ~e8xG~GtQ1YvS5uHIMGX7iI~x8gCuA8cgO~AEQSN~CjEmoAPydwvYxU68OWHT~OP91wrXr1Il88mI2m77BDnkWPBwkPiqyMAdZRpL1uUdVcYc7H-y4KhRgdZZOles31oS6WlBR~dL3j-SJMwurF8WR2485RHIxd0vNh-SUd0d5lTjghTtOxgiJ0UGriEWNBMbt3qED6uA8dBEfLoq~pgD3pCYRftJvZ6go1UFd76ENIdWFQ4r3hVC8JiV8HbR57XX5ykU8F5wGnXVtoGYVLXIJSGgiuKBe8bxRuh~qak8iAqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title:"The Impact of Technology on the Workplace: How Technology is Changing"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title:"The Impact of Technology on the Workplace: How Technology is Changing"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title:"The Impact of Technology on the Workplace: How Technology is Changing"
    },
    
]

const Trending = () => {
    return( 
        <div className="flex flex-col gap-[30px]">
            <h1 className="text-[24px] font-bold">Trending</h1>
            <div className="flex justify-center items-center gap-[20px]">
            {
                data.map((el) => {
                    return (
                        <div className=" p-[28px] flex items-end w-[289px] rounded-[12px] h-[320px] bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
                            <div className="w-[230px] w-[120px]">
                                <button className=" bg-blue-600 text-white rounded-[8px] p-[4px] rounded-mdls">{el.btn}</button>
                                <p className="text-[18px] text-white">{el.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Trending