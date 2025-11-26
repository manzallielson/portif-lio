import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { useThemeColor } from '../hooks/useThemeColor'

function Projetos() {
  const { primary } = useThemeColor()
  const pageBg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <Box minH="100vh" bg={pageBg} py={8}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h1" size="2xl" color={primary} mb={4}>
              Projetos
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')}>
              Aqui você pode adicionar seus projetos e trabalhos realizados.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projetos

