import Image from "next/image";
import house2 from "../../../public/house2.png"

export default function Aboutus(){
    return (
        <div className="max-w-[2000px]  mr-auto ml-auto lg:pr-[50px] lg:pl-[50px] pl:[20px]">
            <div className=" flex md:justify-evenly justify-center md:flex-row flex-col w-fit mt-[10px] mb-[30px] lg:mt-[50px] lg:mb-[50px]">
                <div className="m-[5px] w-fit md:block hidden">
                    <Image src={house2}/>
                </div>

                <div className="md:w-[40%] mt-auto mb-auto w-[100%] p-5">
                    <h2 className=" md:text-[30px] lg:text-[48px] md:leading-[58px] text-[#1E3240] font-semibold text-[25px] text-center md:text-left">Award winning real estate company in Dubai</h2>
                    <p className="text-[#BDBDBD] lg:mt-[25px] lg:mb-[25px] mb-[20px] mt-[10px] text-center md:text-left ">Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    <div className="flex lg:justify-between justify-around">
                        <div className="mr-[10px]">
                            <h2 className="text-[#AFD4E2] text-[10px] md:text-[14px] ">PREVIOUS PEOJECTS</h2>
                            <h3 className="md:text-[48px] text-[30px] font-light lg:w-fit text-center">34+</h3>
                        </div>
                        <div className="mr-[10px]">
                            <h2 className="text-[#AFD4E2] text-[10px] md:text-[14px]">YEARS OF EXPERIENCE</h2>
                            <h3 className="md:text-[48px] text-[30px] font-light lg:w-fit text-center">20y</h3>
                        </div>
                        <div className="mr-[10px]">
                            <h2 className="text-[#AFD4E2] text-[10px] md:text-[14px]">ON GOING PROJECTS</h2>
                            <h3 className="md:text-[48px] text-[30px] font-light lg:w-fit text-center">12</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}