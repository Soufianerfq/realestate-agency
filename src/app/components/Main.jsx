import Image from "next/image"
import home from "../../../public/house1.png"

export default function Main(){
    return(
        <div className="max-w-[2000px] h-full flex sm:flex-row  flex-col ">
            
            <div className="lg:pt-[5px] xl:w-[45%] md:pt-[120px] lg:ml-[6%] md:w-[40%] sm:w-[50%] sm:pt-[100px] sm:pl-[50px] pt-[100px] w-[100%] pl-[30px] mb-auto mt-auto">
                <h1 className="lg:text-[90px] lg:leading-[100px] md:text-[40px] md:leading-[50px] sm:text-[30px] font-semibold mb-[15px] text-[30px] ">A home is built with love and dreams</h1>
                <h3 className="md:text-[18px] sm:mb-[25px] mb-[15px]">Real estate farm that makes your dreams true</h3>
                <button className="bg-[#1E3240] border-[#1E3240] border-1 text-[#AFD4E2] pt-[18px] pb-[18px] pr-[24px] pl-[24px] mr-[30px] text-[14px]">Our Projects</button>
                <button className="text-[#1E3240] border-[#1E3240] border-1 pt-[18px] pb-[18px] pr-[24px] pl-[24px] text-[14px]">Contact us</button>
            </div>
            <div className="place-self-end content-end ml-auto">
                <Image className="md:w-[33rem] 2xl:w-[40rem] sm:w-[20rem] w-[15rem] "  src={home}
                />
            </div>
        </div>
    )
}