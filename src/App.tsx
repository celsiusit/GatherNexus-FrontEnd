
import { motion } from "framer-motion";
import "./App.css";
import backgroundImage from "./assets/comingSoonBackground.jpg";

function App() {

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Direct path from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        {" "}
        {/* Higher z-index */}
        <motion.h1
          className="text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gather Nexus
        </motion.h1>
        <motion.p
          className="text-2xl max-w-lg mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AI-powered event management to simplify your planning. We're launching
          soon!
        </motion.p>
        <motion.p
          className="text-5xl max-w-lg mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-4 rounded-xl shadow-lg font-bold backdrop-blur-md bg-opacity-30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Launching Soon!
        </motion.p>
      </div>
    </div>
  );
}

export default App;
