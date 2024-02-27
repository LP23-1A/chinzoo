import axios from "axios";

let data = [
    {
        img: "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdaTCwNkEgS3OYnWbOK8lQBqywmWVzmgrsU~DlluE9WLsCN8OYPiy9W48~q0pG1g-WBQPg2clYeTKRluWoAjSqIrcvPDXPxKP~v-z7dzCZ2vTr8Z3InVjuumV1X7UDKo-dRM5SczoI80Th99KBhPKYw40TBtVL1iIKIv-mOAwIdhw7n3JETXDyghMp5UK3Kr41-0HyNicRveKmoSBipQolwo72s3qo7R6hdC5N4Ycr8YgHUTS~Hni-2v0W7~E2ROAdDUBxZWcl5gqEr4q2mXGvNOnmlyeXl-zZPhr20ipnxh~Uel6zmgRuFvVnkyiSw5IQ9MiFFfv5pGavWotGSIXQ__",
        name: "Өглөөний хоол",
        price:"14,800₮"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdaTCwNkEgS3OYnWbOK8lQBqywmWVzmgrsU~DlluE9WLsCN8OYPiy9W48~q0pG1g-WBQPg2clYeTKRluWoAjSqIrcvPDXPxKP~v-z7dzCZ2vTr8Z3InVjuumV1X7UDKo-dRM5SczoI80Th99KBhPKYw40TBtVL1iIKIv-mOAwIdhw7n3JETXDyghMp5UK3Kr41-0HyNicRveKmoSBipQolwo72s3qo7R6hdC5N4Ycr8YgHUTS~Hni-2v0W7~E2ROAdDUBxZWcl5gqEr4q2mXGvNOnmlyeXl-zZPhr20ipnxh~Uel6zmgRuFvVnkyiSw5IQ9MiFFfv5pGavWotGSIXQ__",
        name: "Өглөөний хоол",
        price:"14,800₮"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdaTCwNkEgS3OYnWbOK8lQBqywmWVzmgrsU~DlluE9WLsCN8OYPiy9W48~q0pG1g-WBQPg2clYeTKRluWoAjSqIrcvPDXPxKP~v-z7dzCZ2vTr8Z3InVjuumV1X7UDKo-dRM5SczoI80Th99KBhPKYw40TBtVL1iIKIv-mOAwIdhw7n3JETXDyghMp5UK3Kr41-0HyNicRveKmoSBipQolwo72s3qo7R6hdC5N4Ycr8YgHUTS~Hni-2v0W7~E2ROAdDUBxZWcl5gqEr4q2mXGvNOnmlyeXl-zZPhr20ipnxh~Uel6zmgRuFvVnkyiSw5IQ9MiFFfv5pGavWotGSIXQ__",
        name: "Өглөөний хоол",
        price:"14,800₮"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdaTCwNkEgS3OYnWbOK8lQBqywmWVzmgrsU~DlluE9WLsCN8OYPiy9W48~q0pG1g-WBQPg2clYeTKRluWoAjSqIrcvPDXPxKP~v-z7dzCZ2vTr8Z3InVjuumV1X7UDKo-dRM5SczoI80Th99KBhPKYw40TBtVL1iIKIv-mOAwIdhw7n3JETXDyghMp5UK3Kr41-0HyNicRveKmoSBipQolwo72s3qo7R6hdC5N4Ycr8YgHUTS~Hni-2v0W7~E2ROAdDUBxZWcl5gqEr4q2mXGvNOnmlyeXl-zZPhr20ipnxh~Uel6zmgRuFvVnkyiSw5IQ9MiFFfv5pGavWotGSIXQ__",
        name: "Өглөөний хоол",
        price:"14,800₮"
    },
];

const FoodCard = (count: any, discount: any) => {
    const BASE_URL = "http://localhost:8000/category/one";
    const handler = async () => {
      try {
        const { data } = await axios.post(BASE_URL, { name: "Soup" });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
}

export default function Hymdrl () {
    return(
        <>
            {
                data.map((el) => {
                    return(
                        <div className="w-[364px] rounded-[20px] h-[252px]">
                            <img className="rounded-[20px]" src={el.img}/>
                            <p className="text-black">{el.name}</p>
                            <p className="text-[#18BA51]">{el.price}</p>
                        </div>
                    )
                })
            }
        </>
    )
}