import Image from "next/image"
import house from "../../../public/house3.png"

export default function Contactus(){
    return(
        <div className="max-w-[2000px] mr-auto ml-auto pr-[20px] pl-[20px] lg:mt-[80px] mb-[40px] lg:pr-[50px] lg:pl-[50px] ">
            <div className="flex flex-col justify-center items-center md:flex-row  mr-auto ml-auto lg:justify-around md:max-w-[1435px]">
                <div className="lg:w-[445px]">
                    <Image src={house}/>
                </div>
                <div className="flex flex-col justify-center m-[5px] ">
                    <div className="w-fit mb-[30px]">
                        <h2 className="lg:text-[48px] text-[30px] font-semibold text-[#1E3240] w-fit">Contact Us</h2>
                        <h3 className="lg:text-[18px] text-[#BDBDBD] w-fit">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
                    </div>

                    <form className=" flex md:flex-wrap md:flex-row flex-col justify-between space-y-[20px] lg:w-[530px] w-[100%] mr-auto ml-auto ">
                        <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full sm:w-auto" type="text" placeholder="First name"/>
                        <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full sm:w-auto" type="text" placeholder="Last name" />
                        <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full sm:w-auto" type="email" placeholder="Email"/>
                        <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full sm:w-auto" type="number" placeholder="Phone number"/>
                        <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full lg:h-[120px] " type="text" placeholder="Description"/>
                        <button className="action text-[14px] bg-[#1E3240] text-[#BDBDBD] pr-[30px] pl-[30px] pt-[15px] pb-[15px] ">Get Quote</button>
                    </form>
                    <h3 className="text-[#BDBDBD] text-[12px] mt-[10px] w-fit">We don’t sell your email and spam</h3>
                </div>
            </div>
        </div>
    )
}