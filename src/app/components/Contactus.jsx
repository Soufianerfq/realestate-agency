import Image from "next/image"
import house from "../../../public/house3.png"

export default function Contactus(){
    return(
        <div className="max-w-[2000px] mr-auto ml-auto pr-[50px] pl-[50px] mt-[80px] mb-[40px]   ">
            <div className="flex flex-col justify-around items-center lg:flex-row  mr-auto ml-auto pr-[40px] pl-[40px]">
                <div className="w-[445px]">
                    <Image src={house}/>
                </div>
                <div className="flex flex-col m-[5px] ">
                    <div className="w-fit mb-[30px]">
                        <h2 className="md:text-[48px] font-semibold text-[#1E3240] w-fit mb-[]">Contact Us</h2>
                        <h3 className="md:text-[18px] text-[#BDBDBD] w-fit">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
                    </div>

                    <form className=" flex flex-wrap justify-between space-y-[20px] w-[530px] ">
                    <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px]" type="text" placeholder="First name"/>
                    <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px]" type="text" placeholder="Last name" />
                    <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px]" type="email" placeholder="Email"/>
                    <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px]" type="number" placeholder="Phone number"/>
                    <input className="border-[#1E3240] border-2 pt-[10px] pb-[10px] pr-[25px] pl-[15px] text-[18px] w-full lg:h-[120px] " type="text" placeholder="Description"/>
                    <button className=" text-[14px] bg-[#1E3240] text-[#BDBDBD] pr-[30px] pl-[30px] pt-[15px] pb-[15px] ">Get Quote</button>
                    </form>
                    <h3 className="text-[#BDBDBD] text-[12px] mt-[10px]">We don’t sell your email and spam</h3>
                </div>
            </div>
        </div>
    )
}