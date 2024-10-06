import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";


const App = () => {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white dark:text-white mb-44">
        <Navbar />
        <Hero />
        <OverviewCounter />
        <OurVision />
        <Banner />
        <Banner2 />
      </main>
    </>
  );
}

export default App;
