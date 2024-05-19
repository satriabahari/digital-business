import { useEffect } from "react";

import useIsIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import { useMenu } from "../../common/stores/menu";
import { cn } from "../../lib/utils";

interface ContainerProps {
  id: string;
  className?: string;
  isScreen?: boolean;
  [propName: string]: React.ReactNode | string | undefined;
  children: React.ReactNode;
}

const Container = ({ id, className, isScreen, children, ...others }: ContainerProps) => {
  const { isIntersecting, ref } = useIsIntersectionObserver();
  const { setIsActive, isActive } = useMenu();

  useEffect(() => {
    if (isIntersecting) {
      console.log(isActive);
      setIsActive(id);
    }
  }, [isIntersecting, id, setIsActive, isActive]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(`relative mb-32 h-auto lg:scroll-mt-28 ${className}`, isScreen && "min-h-screen")}
      {...others}
    >
      {children}
    </section>
  );
};

export default Container;
