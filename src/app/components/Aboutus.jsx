import Image from "next/image";
import house2 from "../../../public/house2.png"

export default function Aboutus(){
    return (
        <div className="max-w-[2000px] justify-evenly mr-auto ml-auto flex p-[80px]">
        <div>
            <Image src={house2}/>
        </div>

        <div className="w-[40%] justify-self-center align-middle mt-auto mb-auto">
            <h2 className=" xl:text-[48px] xl:leading-[58px] text-[#1E3240] font-semibold ">Award winning real estate company in Dubai</h2>
            <p className="text-[#BDBDBD] mt-[25px] mb-[25px]">Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-[#AFD4E2] text-[14px] ">PREVIOUS PEOJECTS</h2>
                    <h3 className="text-[48px] font-light w-fit">34+</h3>
                </div>
                <div>
                    <h2 className="text-[#AFD4E2] text-[14px]">YEARS OF EXPERIENCE</h2>
                    <h3 className="text-[48px] font-light">20y</h3>
                </div>
                <div>
                    <h2 className="text-[#AFD4E2] text-[14px]">ON GOING PROJECTS</h2>
                    <h3 className="text-[48px] font-light">12</h3>
                </div>
            </div>
        </div>
        </div>
    )
}