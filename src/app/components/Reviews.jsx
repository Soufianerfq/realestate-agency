"use client"
import Image from "next/image"
import data from "./data/projects"
import { useState } from "react";
import quote from "../../../public/quote.png"

export default function Reviews(){
    const [current, setCurrent] = useState()
    const comments = data.comments;
    const comment = comments[1]
    return(
        <div className="max-w-[2000px] mr-auto ml-auto pr-[50px] pl-[50px] mt-[40px] mb-[40px] flex flex-col justify-center items-center">
            <div className="w-fit mb-[70px]">
                <h2 className="md:text-[48px] font-semibold text-[#1E3240]">Few smiles and comment</h2>
                <h3 className="md:text-[18px] text-[#1E3240]">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
            </div>
            <div id="slider" className="flex ">
            <button>back</button>
                <div className=" flex justify-around items-center lg:flex-row lg:w-[100%] flex-col w-[450px] mr-auto ml-auto">
                    <div className="w-[445px]">
                        <Image src={comment.src}/>
                    </div>
                    <div className="lg:w-[40%] mt-auto mb-auto">
                    <Image src={quote}/>
                        <h2 className="md:text-[32px] mt-[20px] font-semibold text-[#1E3240]">{comment.header}</h2>
                        <p className="md:text-[24px] mt-[15px] font-light text-[#1E3240]">{comment.comment}</p>
                        <h3 className="md:text-[24px] mt-[15px] font-semibold text-[#1E3240]">{comment.name}</h3>
                        <h4 className="md:text-[18px] mb-[15px] text-[#1E3240]">{comment.tag}</h4>
                    </div>
                </div>
                <button>next</button>
            </div>
        </div>
    )
}