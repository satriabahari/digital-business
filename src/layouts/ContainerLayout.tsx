import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContainerLayoutProps {
  children: React.ReactNode;
}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true,
      offset: 200,
    });
  });
  return <div>{children}</div>;
};

export default ContainerLayout;

