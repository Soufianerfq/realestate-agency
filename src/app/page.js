import Header from "./components/Header";
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import OngoingProjects from "./components/OngoingProjects";
import Reviews from "./components/Reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <header className="w-full fixed top-0 z-[99] bg-[#AFD4E2] text-[#1E3240] flex justify-between pt-[20px] pb-[15px] pr-[30px] pl-[8%]">
        <Header/>
      </header>
      <main className="w-full sm:h-[100vh]  bg-[#AFD4E2] text-[#1E3240]">
        <Main/>
      </main>
      <section id="aboutus" className="w-full">
        <Aboutus/>
      </section>
      <section id="ongoingprojects" className="w-full">
        <OngoingProjects/>
      </section>
      <section id="reviews" className="w-full text-[#1E3240]">
        <Reviews/>
      </section>
      <section id="contactus" className="w-full">
        <Contactus/>
      </section>
      <footer className="w-full bg-[#1E3240]">
        <Footer/>
      </footer>
    </>
  );
}
