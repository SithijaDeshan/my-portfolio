import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AyurCare",
    img: "/ayur_banner.png",
    desc: "A comprehensive platform designed to streamline Ayurvedic clinic operations and enhance patient care. Key features include online appointment booking, secure patient portal, doctor panel, inventory management, AI-driven patient categorization, video conferencing for remote consultations, and an admin panel for centralized management. Developed using React, Spring Boot, Tailwind CSS, Bootstrap, AWS S3, MySQL, Zeago Cloud, Google Colab, Flask, and machine learning techniques, this system blends traditional Ayurvedic practices with modern technology to improve healthcare delivery and clinic management.",
    link: "https://youtu.be/S0ZQNamyj44",
  },
  {
    id: 2,
    title: "CityMetroMovers",
    img: "/mtro.jpg",
    desc: "CityMetroMovers is a ticketing and package purchasing platform inspired by the JICA Light Rail Transit project in Colombo. Developed with HTML, CSS, Bootstrap, JavaScript, MySQL, and PHP, it features seamless payment transactions, live chat support, QR code ticketing, monthly finance reports, and email notifications. The project aims to enhance the commuter experience and sets the foundation for future transportation innovations, showcasing our practical application of academic knowledge.",
    link: "https://github.com/SithijaDeshan/AyurCare"
  },
  {
    id: 3,
    title: "MicroFrontends",
    img: "micro.png",
    desc: "The Microfrontends project demonstrates the power of breaking down a large web application into smaller, independent sub-apps that can be developed, deployed, and maintained by different teams. Using technologies like module federation and AWS, the project showcases a scalable architecture where each microfrontend can function independently, enhancing performance and reducing production bugs. The project includes features such as isolated state management, tiered routing for app integration, and a CI/CD pipeline for efficient deployment, offering a practical solution for building large-scale, dynamic web applications.",
    link: "https://d2cstssmvk0iel.cloudfront.net"
  },
  {
    id: 4,
    title: "Microservices",
    img: "sbms.png",
    desc: "Developed a scalable microservices project using Spring Boot, Docker, and Kubernetes. Implemented an API Gateway for centralized routing and Eureka Naming Server for service discovery. Integrated fault tolerance, load balancing, and distributed tracing to create robust, cloud-native services, applying industry best practices from RESTful API design to container orchestration.",
    link: "https://github.com/SithijaDeshan/currency_microservices"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
      <section id={item.title.replace(/\s+/g, "")}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
