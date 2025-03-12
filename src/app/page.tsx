import Aboutus from "@/components/Aboutus";
import Header from "@/components/header";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-[url('/assets/images/hero-bg.png')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <Header/>
      <Aboutus/>
    </div>
  );
}
