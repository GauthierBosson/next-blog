import { useTrail, animated, config } from "react-spring";
import { Text, Flex } from "@chakra-ui/core"

const items = ["LEARN.", "IMPROVE.", "TRAIN."]

const WordsAnimation = () => {
  const trail = useTrail(items.length, {
    config: config.molasses,
    opacity: 1,
    from: { opacity: 0 }
  })

  return (
    <Flex direction="row" justify="center">
      {trail.map(({ ...props }, index) => (
        <animated.div
          key={items[index]}
          style={{...props}}
        >
          <Text fontSize="6xl">{items[index]}&nbsp;</Text>
        </animated.div>
      ))}
    </Flex>
  )
};

export default WordsAnimation;
