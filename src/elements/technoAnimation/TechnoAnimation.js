import { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
import { Text, Flex } from "@chakra-ui/core";

const items = [
  { id: "1", word: "REACT" },
  { id: "2", word: "VUE" },
  { id: "3", word: "ANGULAR" },
  { id: "4", word: "RUST" },
];

const TechnoAnimation = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(items[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  useEffect(() => {
    const interval = setInterval(() => setIndex((state) => (state + 1) % 4), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex justify="center">
      {transitions.map(({ item, props, key }) => (
        <animated.div style={{ ...props }} key={key}>
          <Text
            style={{ transform: "translateX(-50%)" }}
            position="absolute"
            fontWeight="bold"
            fontSize="6xl"
          >
            {item.word}
          </Text>
        </animated.div>
      ))}
    </Flex>
  );
};

export default TechnoAnimation;
