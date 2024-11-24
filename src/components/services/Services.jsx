import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on building the future with
          <br /> Passion and innovation
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            Crafting intuitive and responsive user interfaces using modern web
            technologies, including Micro Frontends, for scalable and maintainable
            applications.
          </p>
          <button
              onClick={() => {
                document.getElementById("MicroFrontends").scrollIntoView({
                  behavior: "smooth",
                });
              }}
          >
            Micro Frontend Architecture
          </button>
        </motion.div>

        <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            Building robust and scalable server-side solutions, leveraging Microservices
            with Spring Boot to ensure flexibility, resilience, and performance.
          </p>
          <button
              onClick={() => {
                document.getElementById("Microservices").scrollIntoView({
                  behavior: "smooth",
                });
              }}
          >
            Microservices Architecture
          </button>
        </motion.div>



        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cloud (AWS)</h2>
          <p>
            Leveraging AWS cloud services to deploy, scale, and optimize applications, ensuring reliability and cost-efficiency.
          </p>

          <button onClick={() => window.open("https://www.credly.com/badges/1b306d6d-87ab-42c8-bc97-60ced723832d/linked_in?t=sn6wfu", "_blank")}>View My Verified Badge</button>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
