import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
  World,
  Team,
} from '../sections';

const Page = () => {
  return (
    <>
      <div className="xl:hidden bg-primary-black w-full min-h-screen flex flex-col justify-center items-center gap-4">
        <img src="/error.png" alt="Terjadi kesalahan" className="w-64" />
        <p className="w-5/6 md:w-3/5 text-white text-center">
          Tampaknya terjadi kesalahan dalam membuat website. Silahkan buka
          diperangkat Laptop atau PC atau perangkat yang memiliki ukuran layar
          besar!
        </p>
      </div>
      <div className="hidden xl:block bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <div className="gradient-04 z-0" />
          <Feedback />
          <Team />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
