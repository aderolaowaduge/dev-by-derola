import { motion } from "framer-motion";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

import Navbar from "./components/Navbar";
import Mission from './Mission';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <div className="font-sans text-main-white bg-muted-navy ">
      <Navbar />
      {/* Parallax Context Provider */}
      <ParallaxProvider>
        <div className="min-h-screen shadow-[0_4px_12px_rgba(0,0,0,0.2)] mb-10">
          {/* Hero Banner with Parallax Effect */}
          <ParallaxBanner
            layers={[{ image: "./assets/grand_rapids.JPG", speed: -20 }]}
            className="min-h-[100vh] relative"
          >
            {/* Black overlay to darken image */}
            <div className="absolute inset-0 bg-navy/20 z-0" />

            {/* Gradient overlay and centered intro text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50 flex flex-col items-center justify-center px-8">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4 }}
                className="text-5xl pt-15 font-medium drop-shadow-lg text-center"
              >
                {/*circular profile picture*/}
                <div className="w-[150px] h-[150px] mx-auto mb-7">
                  <img
                    src="assets/prof_pic.jpg"
                    className="rounded-full w-full h-full object-cover border-1 border-main-white"
                    alt="Profile picture"
                  />
                </div>
                Aderola Owaduge
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-5 text-lg italic text-center"
              >
                Shaping ideas into reality, one line of code at a time
              </motion.p>

              {/* Bouncing down arrow animation */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>
          </ParallaxBanner>
        </div>
      </ParallaxProvider>
      <Mission/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
