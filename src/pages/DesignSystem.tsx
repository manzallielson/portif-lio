import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react'

function DesignSystem() {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h1" size="2xl" color="blue.600" mb={4}>
              Design System
            </Heading>
            <Divider mb={4} />
            <Text color="gray.700">
              Guia de estilo, componentes e padrões de design utilizados no portfólio.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default DesignSystem

