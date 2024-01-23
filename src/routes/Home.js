import React from "react";
import './Home.css'; 
import { motion } from "framer-motion";




function Home() {
  const text = "Welcome to DWJ Curbside".split(" ");
  return (
    <div className="home">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 2.5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      

    </div>
  
  );
}

export default Home;