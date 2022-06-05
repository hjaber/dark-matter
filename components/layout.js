import { Box, Flex, Text } from "@chakra-ui/layout";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh" p={2}>
      <Box
        zIndex="10"
        sx={{
          position: "-webkit-sticky" /* Safari */,
          position: "sticky",
          top: "0",
        }}
      >
        <Text
          bgGradient="linear(to-l, #eeaeca, #94bbe9)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          dark matter
        </Text>
      </Box>
      <main>
        <Box p={6} maxH="100%">
          {children}
        </Box>
      </main>
      <Box
        zIndex="10"
        mt="auto"
        sx={{
          position: "-webkit-sticky" /* Safari */,
          position: "sticky",
          bottom: "0",
        }}
      >
        <Text
          bgGradient="linear(to-l, #eeaeca, #94bbe9)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          textAlign="end"
        >
          dark matter
        </Text>
      </Box>
    </Flex>
  );
}
