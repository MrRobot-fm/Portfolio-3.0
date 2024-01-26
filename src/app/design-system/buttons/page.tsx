import { Box } from "@chakra-ui/react";
import { Button } from "@/components/atoms/Button/Button";

export default function ButtonsPage() {
  return (
    <Box h="100vh" display="grid" placeItems="center">
      <Button label="all projects" icon={{ name: "arrow" }} variant="primary" />
      <Button
        label="all projects"
        icon={{ name: "arrow" }}
        variant="secondary"
      />
      <Box
        display="grid"
        placeItems="center"
        w="full"
        h={100}
        bg="primary.black"
      >
        <Button label="all projects" size="textLink" variant="primary" />
      </Box>
      <Button label="all projects" size="textLink" variant="secondary" />
      <Box
        display="grid"
        placeItems="center"
        w="full"
        h={100}
        bg="primary.black"
      >
        <Box w={200}>
          <Button
            label="all projects"
            icon={{ name: "arrow" }}
            size="link"
            variant="primary"
          />
        </Box>
      </Box>
      <Box w={200}>
        <Button
          label="all projects"
          icon={{ name: "arrow" }}
          size="link"
          variant="secondary"
        />
      </Box>
    </Box>
  );
}
