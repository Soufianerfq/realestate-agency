"use client";
import { useRef } from "react";
// import Header from "./components/Header";
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import OngoingProjects from "./components/OngoingProjects";
import Reviews from "./components/Reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

export default function Home() {
  const reviewsRef = useRef()
  const portfolioRef = useRef()
  const contactusRef = useRef()
  const aboutusRef = useRef()
  const homesRef = useRef()

  const Header = dynamic(()=>import("../app/components/Header"),{
    ssr:false
  })

  return (
    <>
      <header className="w-full fixed top-0 z-[99] bg-[#AFD4E2] text-[#1E3240] flex justify-between pt-[20px] pb-[15px] pr-[30px] pl-[8%]">
        <Header home= {homesRef} reviews= {reviewsRef} portfolio = {portfolioRef} contactus = {contactusRef} aboutus = {aboutusRef}/>
      </header>
      <main ref={homesRef} className="w-full 2xl:h-[100vh]  bg-[#AFD4E2] text-[#1E3240]">
        <Main/>
      </main>
      <section ref={aboutusRef} id="aboutus" className="w-full">
        <Aboutus/>
      </section>
      <section ref={portfolioRef} id="ongoingprojects" className="w-full">
        <OngoingProjects/>
      </section>
      <section ref={reviewsRef} id="reviews" className="w-full text-[#1E3240]">
        <Reviews/>
      </section>
      <section ref={contactusRef} id="contactus" className="w-full">
        <Contactus/>
      </section>
      <footer className="w-full bg-[#1E3240]">
        <Footer/>
      </footer>
    </>
  );
}
