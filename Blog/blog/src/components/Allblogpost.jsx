const data = [
    {
        url: "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1702857600&Signature=p9omvh-MQPdM4vpXwpf3rvtgA73pKgfoOOVtTmOTBgUeqmEsNONRUhce6hVuwVZosNN4iZs0EQZGhZPFd02koQQUfTXzi6jC5wZzcO8RNgoRiFaR02M2BG1-kmnFx4CkZxdpLb-59ho6Tc4nsSxVhMYFbQONEsk~LnOfON8z-jEN95Ru3T-8NBCOAY3PrfKC~-mr~X30eFYo06bksEgok0Vj0EzkzN9DETfgEn7JuFHpqcKR8CGuL4gsbXuxvSpF3qAnt1dNF7~~Q4-VCU3MzZeqvCz-33jbdgD~-NFPDAd6sUZTU-p2bE3HZOH2~4TjOmfInY7Ai-VkhkFC-K-Njg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "design",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/fd32/a56d/d484b871abb15e732abb0a69f2ccd525?Expires=1702857600&Signature=blQBH5zKwqVJnGlKsNrG7lMZ1MthOwJfHU2Ax77nfoZugfaP3V4i2EUcAlgT5qwoz0xEKi6CvE0e04kUWOv1Lza-fY6LGbi-F7P4F2L5IqDJ-sssFkkv7NfZ6mkcuijhvPv6QPcZIw~-mB7cL5f8lkzkaBO1IEuOW4y~QaPhC0AMB368QfjIxVXs1EFvX9ub9JvqrLVd04AWCPiAsZy7xECjNpj9Yu-ZsakdJMTOMTGI5S63Q6Cx8vf7BpdK8x67mzJZx2~t4x7gucNEa-i9Fi4NhePelx4F8QWlEspDi3QlFXt-UFzv-g2h1oFU0QK~RFEQp098GEVbxP7ij1BHgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        btn: "technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022"
    },
]

const Allblogpost = () => {
    return(
       <div className=" flex  flex-col gap-[32px] items-center">
            <div className="flex flex-col gap-[32px]">
                <div className="w-[1216px] flex flex-col justify-center gap-[32px]">
                    <div>
                        <h1 className="text-[24px] font-bold">All Blog Post</h1>
                    </div>
                    <div className=" flex gap-[30px]">
                        <ul className=" flex gap-[20px]">
                            <li className="hover:text-[#D4A373]">All</li>
                            <li className="hover:text-[#D4A373]">Design</li>
                            <li className="hover:text-[#D4A373]">Travel</li>
                            <li className="hover:text-[#D4A373]">Fashion</li>
                            <li className="hover:text-[#D4A373]">Technology</li>
                            <li className="hover:text-[#D4A373]">Branding</li>
                        </ul>
                        <button className="w-[826px] flex justify-end hover:text-[#D4A373]">View All</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[20px]">
                {
                    data.map((el) => {
                        return (
                            <div className="p-[16px] w-[392px] h-[476px] flex flex-col border justify-between items-center rounded-[12px]">
                                <img src={el.url} />
                                <div className="h-[188px] flex flex-col justify-between items-start">
                                    <button className="pt-[4px] pb-[4px] pr-[10px] pl-[10px] bg-[#eef2ff] rounded-[8px] text-[#818cf8]">{el.btn}</button>
                                    <p className="text-[24px]">{el.title}</p>
                                    <p className="text-[16px] text-[#97989F]">{el.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="pt-[12px] pb-[12px] pl-[20px] pr-[20px] rounded-[12px] bg-gray-100 border hover:bg-gray-200">Load More</button>
       </div>
    )
}
export default Allblogpost