import { animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AnimationBlock = ({ children }: Props) => {
  const spring = useSpring({
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 },
    config: { duration: 500 },
    delay: 300,
  });
  return <animated.div style={{ ...spring }}>{children}</animated.div>;
};

export default AnimationBlock;
