import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  HStack,
  SimpleGrid,
  Button,
  Badge,
  Link,
  Code,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { EmailIcon, PhoneIcon } from '../icons'
import { useThemeColor } from '../hooks/useThemeColor'

function DesignSystem() {
  const { t } = useTranslation()
  const { primary, primaryLight, themeColor } = useThemeColor()
  const cardBg = useColorModeValue('white', 'gray.700')

  const colors = {
    primary: themeColor === 'black' 
      ? ['#f5f5f5', '#e0e0e0', '#b3b3b3', '#808080', '#4d4d4d', '#1a1a1a', '#000000', '#000000', '#000000', '#000000']
      : [`${themeColor}.50`, `${themeColor}.100`, `${themeColor}.200`, `${themeColor}.300`, `${themeColor}.400`, `${themeColor}.500`, `${themeColor}.600`, `${themeColor}.700`, `${themeColor}.800`, `${themeColor}.900`],
    gray: ['gray.50', 'gray.100', 'gray.200', 'gray.300', 'gray.400', 'gray.500', 'gray.600', 'gray.700', 'gray.800', 'gray.900'],
    semantic: {
      success: 'green.500',
      warning: 'yellow.500',
      error: 'red.500',
      info: primaryLight,
    },
  }

  const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32]

  const pageBg = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <Box minH="100vh" bg={pageBg} py={{ base: 4, md: 8 }}>
      <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 4, md: 8 }} align="stretch">
          {/* Header */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} color={primary} mb={4}>
              {t('designSystem.title')}
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
              {t('designSystem.description')}
            </Text>
          </Box>

          {/* Cores */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.colors.title')}
            </Heading>
            <Divider mb={6} />

            <VStack spacing={6} align="stretch">
              {/* Primary Colors */}
              <Box>
                <Text fontWeight="semibold" mb={3} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.colors.primary')}
                </Text>
                <SimpleGrid columns={{ base: 3, sm: 5, md: 10 }} spacing={2}>
                  {colors.primary.map((color) => (
                    <Box key={color}>
                      <Box
                        bg={color}
                        h={{ base: "40px", md: "60px" }}
                        borderRadius="md"
                        border="1px"
                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                        mb={2}
                      />
                      <Text fontSize={{ base: "2xs", md: "xs" }} textAlign="center" color={useColorModeValue('gray.600', 'gray.400')} noOfLines={1}>
                        {color}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>

              {/* Gray Scale */}
              <Box>
                <Text fontWeight="semibold" mb={3} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.colors.grays')}
                </Text>
                <SimpleGrid columns={{ base: 3, sm: 5, md: 10 }} spacing={2}>
                  {colors.gray.map((color) => (
                    <Box key={color}>
                      <Box
                        bg={color}
                        h={{ base: "40px", md: "60px" }}
                        borderRadius="md"
                        border="1px"
                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                        mb={2}
                      />
                      <Text fontSize={{ base: "2xs", md: "xs" }} textAlign="center" color={useColorModeValue('gray.600', 'gray.400')} noOfLines={1}>
                        {color}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>

              {/* Semantic Colors */}
              <Box>
                <Text fontWeight="semibold" mb={3} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.colors.semantic')}
                </Text>
                <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={4}>
                  <Box>
                    <Box bg={colors.semantic.success} h={{ base: "50px", md: "60px" }} w="100%" borderRadius="md" mb={2} />
                    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>Success</Text>
                  </Box>
                  <Box>
                    <Box bg={colors.semantic.warning} h={{ base: "50px", md: "60px" }} w="100%" borderRadius="md" mb={2} />
                    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>Warning</Text>
                  </Box>
                  <Box>
                    <Box bg={colors.semantic.error} h={{ base: "50px", md: "60px" }} w="100%" borderRadius="md" mb={2} />
                    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>Error</Text>
                  </Box>
                  <Box>
                    <Box bg={colors.semantic.info} h={{ base: "50px", md: "60px" }} w="100%" borderRadius="md" mb={2} />
                    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>Info</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </VStack>
          </Box>

          {/* Tipografia */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.typography.title')}
            </Heading>
            <Divider mb={6} />

            <VStack spacing={6} align="stretch">
              {/* Headings */}
              <Box>
                <Text fontWeight="semibold" mb={4} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.typography.headings')}
                </Text>
                <VStack spacing={3} align="stretch">
                  <Box>
                    <Heading as="h1" size={{ base: "2xl", md: "4xl" }}>Heading 4xl</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="4xl"</Code>
                  </Box>
                  <Box>
                    <Heading as="h2" size={{ base: "xl", md: "3xl" }}>Heading 3xl</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="3xl"</Code>
                  </Box>
                  <Box>
                    <Heading as="h3" size={{ base: "lg", md: "2xl" }}>Heading 2xl</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="2xl"</Code>
                  </Box>
                  <Box>
                    <Heading as="h4" size={{ base: "md", md: "xl" }}>Heading xl</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="xl"</Code>
                  </Box>
                  <Box>
                    <Heading as="h5" size="lg">Heading lg</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="lg"</Code>
                  </Box>
                  <Box>
                    <Heading as="h6" size="md">Heading md</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="md"</Code>
                  </Box>
                  <Box>
                    <Heading as="h6" size="sm">Heading sm</Heading>
                    <Code fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>size="sm"</Code>
                  </Box>
                </VStack>
              </Box>

              {/* Text */}
              <Box>
                <Text fontWeight="semibold" mb={4} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.typography.text')}
                </Text>
                <VStack spacing={3} align="stretch">
                  <Text fontSize={{ base: "3xl", md: "6xl" }}>Text 6xl</Text>
                  <Text fontSize={{ base: "2xl", md: "5xl" }}>Text 5xl</Text>
                  <Text fontSize={{ base: "xl", md: "4xl" }}>Text 4xl</Text>
                  <Text fontSize={{ base: "lg", md: "3xl" }}>Text 3xl</Text>
                  <Text fontSize={{ base: "md", md: "2xl" }}>Text 2xl</Text>
                  <Text fontSize="xl">Text xl</Text>
                  <Text fontSize="lg">Text lg</Text>
                  <Text fontSize="md">Text md (default)</Text>
                  <Text fontSize="sm">Text sm</Text>
                  <Text fontSize="xs">Text xs</Text>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Componentes */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.components.title')}
            </Heading>
            <Divider mb={6} />

            <VStack spacing={6} align="stretch">
              {/* Buttons */}
              <Box>
                <Text fontWeight="semibold" mb={4} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.components.buttons')}
                </Text>
                <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={3}>
                  <Button colorScheme={themeColor} size={{ base: "sm", md: "md" }}>Primary</Button>
                  <Button colorScheme={themeColor} variant="outline" size={{ base: "sm", md: "md" }}>Outline</Button>
                  <Button colorScheme={themeColor} variant="ghost" size={{ base: "sm", md: "md" }}>Ghost</Button>
                  <Button colorScheme={themeColor} variant="link" size={{ base: "sm", md: "md" }}>Link</Button>
                  <Button colorScheme={themeColor} size="sm">Small</Button>
                  <Button colorScheme={themeColor} size="md">Medium</Button>
                  <Button colorScheme={themeColor} size="lg">Large</Button>
                </SimpleGrid>
              </Box>

              {/* Badges */}
              <Box>
                <Text fontWeight="semibold" mb={4} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.components.badges')}
                </Text>
                <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={3}>
                  <Badge colorScheme={themeColor} fontSize={{ base: "xs", md: "sm" }}>Blue</Badge>
                  <Badge colorScheme="green" fontSize={{ base: "xs", md: "sm" }}>Green</Badge>
                  <Badge colorScheme="red" fontSize={{ base: "xs", md: "sm" }}>Red</Badge>
                  <Badge colorScheme="yellow" fontSize={{ base: "xs", md: "sm" }}>Yellow</Badge>
                  <Badge colorScheme="purple" fontSize={{ base: "xs", md: "sm" }}>Purple</Badge>
                  <Badge colorScheme="gray" fontSize={{ base: "xs", md: "sm" }}>Gray</Badge>
                </SimpleGrid>
              </Box>

              {/* Cards */}
              <Box>
                <Text fontWeight="semibold" mb={4} color="gray.700">
                  {t('designSystem.components.cards')}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box bg={useColorModeValue('white', 'gray.800')} p={6} borderRadius="lg" boxShadow="md" border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Heading as="h3" size="md" mb={2}>Card Example</Heading>
                    <Text color={useColorModeValue('gray.700', 'gray.300')}>Este é um exemplo de card utilizado no projeto.</Text>
                  </Box>
                  <Box bg={useColorModeValue('white', 'gray.800')} p={6} borderRadius="lg" boxShadow="md" border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Heading as="h3" size="md" mb={2}>Card Example</Heading>
                    <Text color={useColorModeValue('gray.700', 'gray.300')}>Este é um exemplo de card utilizado no projeto.</Text>
                  </Box>
                </SimpleGrid>
              </Box>

              {/* Links */}
              <Box>
                <Text fontWeight="semibold" mb={4} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                  {t('designSystem.components.links')}
                </Text>
                <VStack spacing={3} align="stretch">
                  <Link href="#" color={primaryLight} fontSize={{ base: "sm", md: "md" }}>Link padrão</Link>
                  <Link href="#" color={primaryLight} textDecoration="underline" fontSize={{ base: "sm", md: "md" }}>Link sublinhado</Link>
                  <Link href="#" color={primaryLight} _hover={{ textDecoration: 'underline' }} fontSize={{ base: "sm", md: "md" }}>Link hover</Link>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Espaçamentos */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.spacing.title')}
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')} mb={6} fontSize={{ base: "sm", md: "md" }}>
              {t('designSystem.spacing.description')}
            </Text>
            <VStack spacing={4} align="stretch">
              {spacing.map((space) => (
                <HStack key={space} align="center" flexWrap="wrap">
                  <Box w={{ base: "60px", md: "100px" }}>
                    <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue('gray.600', 'gray.400')}>{space}</Text>
                  </Box>
                  <Box bg={primaryLight} h="20px" w={{ base: `${Math.min(space * 4, 200)}px`, md: `${space * 4}px` }} borderRadius="sm" />
                  <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue('gray.500', 'gray.500')}>= {space * 4}px</Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Ícones */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.icons.title')}
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')} mb={6} fontSize={{ base: "sm", md: "md" }}>
              {t('designSystem.icons.description')}
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
              <VStack>
                <EmailIcon />
                <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue('gray.600', 'gray.400')}>EmailIcon</Text>
              </VStack>
              <VStack>
                <PhoneIcon />
                <Text fontSize={{ base: "xs", md: "sm" }} color={useColorModeValue('gray.600', 'gray.400')}>PhoneIcon</Text>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* Containers */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.containers.title')}
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')} mb={6} fontSize={{ base: "sm", md: "md" }}>
              {t('designSystem.containers.description')}
            </Text>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontWeight="semibold" mb={2} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>Container padrão</Text>
                <Box bg={useColorModeValue('gray.100', 'gray.700')} p={{ base: 3, md: 4 }} borderRadius="md" border="2px dashed" borderColor={useColorModeValue('gray.300', 'gray.600')}>
                  <Code fontSize={{ base: "xs", md: "sm" }}>maxW="container.lg"</Code>
                </Box>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={2} color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>Card padrão</Text>
                <Box bg={useColorModeValue('white', 'gray.800')} p={{ base: 4, md: 6 }} borderRadius="lg" boxShadow="md" border="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
                  <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "xs", md: "sm" }}>bg="white" p={8} borderRadius="lg" boxShadow="md"</Text>
                </Box>
              </Box>
            </VStack>
          </Box>

          {/* Exemplos de Uso */}
          <Box bg={cardBg} p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size={{ base: "md", md: "lg" }} color={primary} mb={4}>
              {t('designSystem.examples.title')}
            </Heading>
            <Divider mb={4} />
            <Text color={useColorModeValue('gray.700', 'gray.300')} mb={6} fontSize={{ base: "sm", md: "md" }}>
              {t('designSystem.examples.description')}
            </Text>
            <VStack spacing={6} align="stretch">
              <Box bg={useColorModeValue('white', 'gray.800')} p={{ base: 4, md: 6 }} borderRadius="lg" boxShadow="md">
                <Heading as="h3" size={{ base: "sm", md: "md" }} color={primary} mb={2}>
                  Exemplo de Card de Experiência
                </Heading>
                <Divider mb={4} />
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between" flexWrap="wrap">
                    <Heading as="h4" size={{ base: "xs", md: "sm" }}>Desenvolvedor Front-end</Heading>
                    <Badge colorScheme={themeColor} fontSize={{ base: "xs", md: "sm" }}>12/2023 - Atual</Badge>
                  </HStack>
                  <Text fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')} mb={2} fontSize={{ base: "sm", md: "md" }}>
                    Empresa
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize={{ base: "sm", md: "md" }}>
                    Descrição da experiência profissional...
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default DesignSystem
