import Image from "next/image";
import data from "./data/projects";

export default function OngoingProjects(){
    const projects = data.projects
    return (
        <div className="max-w-[2000px] mr-auto ml-auto ">
            <div>
                <h2 className="md:text-[48px] font-semibold text-[#1E3240]">Ongoing projects</h2>
                <h3 className="md:text-[22px] text-[#1E3240]">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
            </div>
            <div className="flex">
                <div>
                    <Image />
                    <div>
                        <h3>Vintage Villa</h3>
                        <p>2715 Ash Dr. San Jose, Dubai</p>
                    </div>
                </div>
            </div>
        </div>
    )
}