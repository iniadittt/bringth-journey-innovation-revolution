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

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
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
);

export default Page;
