import Image from "next/image";
import data from "./data/projects";

export default function OngoingProjects(){
    const projects = data.projects
    return (
        <div className="max-w-[2000px] mr-auto ml-auto lg:pr-[0] lg:pl-[0] mt-[40px] mb-[40px] flex flex-col justify-start items-start pr-[20px] pl-[20px]">
            <div className="lg:w-[75%] lg:mt-[40px] lg:mb-[40px] mb-[30px] mr-auto ml-auto">
                <h2 className="lg:text-[48px] text-[30px] font-semibold text-[#1E3240]">Ongoing projects</h2>
                <h3 className="md:text-[18px] text-[#BDBDBD]">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
            </div>
            <div id="caroussel" className=" flex w-full overflow-hidden space-x-15 ">
                {projects.map(({id, src, name, location})=>{
                    return(
                        <div className="group">
                            <div key={id} className=" flex flex-col justify-center">
                                    <Image alt="house" className="min-w-[350px] max-h-[450px]" src={src}/>
                                <div id="card" className="pt-[15px] bg-white pb-[15px] pr-[10px] pl-[10px] w-[290px] self-center relative bottom-9 shadow-[0_0_8px_1px_rgba(0,0,0,0.33);]">
                                    <h3 className="text-[14px] font-semibold text-[#1E3240]">{name}</h3>
                                    <p className="text-[10px] font-normal text-[#1E3240]">{location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {projects.map(({id, src, name, location})=>{
                    return(
                        <div className="group">
                            <div key={id +1} className=" flex flex-col justify-center">
                                    <Image alt="house" className="min-w-[350px] max-h-[450px]" src={src}/>
                                <div id="card" className="pt-[15px] bg-white pb-[15px] pr-[10px] pl-[10px] w-[290px] self-center relative bottom-9 shadow-[0_0_8px_1px_rgba(0,0,0,0.33);]">
                                    <h3 className="text-[14px] font-semibold text-[#1E3240]">{name}</h3>
                                    <p className="text-[10px] font-normal text-[#1E3240]">{location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}