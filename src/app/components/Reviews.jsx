"use client"
import Image from "next/image"
import data from "./data/projects"
import { useState } from "react";
import quote from "../../../public/quote.png"
import left from "../../../public/left.svg"
import right from "../../../public/right.svg"

export default function Reviews(){
    const [commentIndex, setCommentIndex] = useState(0)
    const comments = data.comments;

    const showNext = ()=>{
        setCommentIndex(index=>{
            if(index === comments.length - 1) return 0
            return index + 1
        })
    }
    const showPrev = ()=>{
        setCommentIndex(index=>{
            if(index === 0) return comments.length - 1
            return index - 1
        })
    }
    return(
        <div className="max-w-[2000px] mr-auto ml-auto pr-[20px] pl-[20px] lg:mt-[80px] mb-[40px] lg:pr-[50px] lg:pl-[50px] ">
            <div className="flex flex-col justify-center items-center md:flex-col mr-auto ml-auto lg:justify-around">
                <div className=" lg:w-[80%] lg:mb-[70px] mb-[30px]">
                    <h2 className="lg:text-[48px] text-[30px] font-semibold text-[#1E3240]">Few smiles and comment</h2>
                    <h3 className="md:text-[18px] text-[#BDBDBD]">Turpis facilisis tempor pulvinar in lobortis ornare magna.</h3>
                    <div className="inline">


                    </div>
                </div>
                <div id="slider" className="flex overflow-hidden w-screen">
                    {comments.map(({id, src, header, comment, name, tag })=>{
                        return(
                        <div key={id} style={{translate: `${-100 * commentIndex}%`}} className="md:min-w-screen min-w-[100%] flex justify-center p-[20px] transition">
                            <button onClick={()=> showPrev()}><Image alt="prev" className="min-w-[20px]" src={left}/></button>
                            <div className=" flex justify-around items-center md:flex-row md:w-[1450px] lg:ml-[20px] lg:mr-[20px] flex-col mr-auto ml-auto  ">
                                <div className=" w-fit m-[10px]">
                                    <Image alt="tag" src={src}/>
                                </div>
                                <div className="md:w-[540px] lg:mt-auto lg:mb-auto  mt-[20px] w-[90%]  ">
                                <Image alt="client" src={quote}/>
                                    <h2 className="lg:text-[32px] text-[26px] mt-[20px] font-semibold text-[#1E3240]">{header}</h2>
                                    <p className="lg:text-[24px] text-[18px] mt-[15px] font-light text-[#1E3240]">{comment}</p>
                                    <h3 className="lg:text-[24px] text-[18px] mt-[15px] font-semibold text-[#1E3240]">{name}</h3>
                                    <h4 className="lg:text-[18px] text-[18px] mb-[15px] text-[#1E3240]">{tag}</h4>
                                </div>
                            </div>
                            <button onClick={()=>showNext()}><Image alt="next" className="min-w-[20px]" src={right}/></button>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}