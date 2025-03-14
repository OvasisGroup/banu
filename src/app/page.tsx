import Aboutus from "@/components/Aboutus";
import Break from "@/components/Break";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/header";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <div className="bg-[url('/assets/images/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <Header/>
      <Aboutus/>
      <Break/>
      <WhyUs/>
      <GetStarted/>
      <Footer/>
      <MainFooter/>
    </div>
  );
}
