import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    HStack,
    Stack,
    Divider,
    Badge,
    SimpleGrid,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { EmailIcon, PhoneIcon } from '../icons'
import { useThemeColor } from '../hooks/useThemeColor'

// Lista de habilidades
const habilidades = [
    'React.js',
    'Typescript',
    'Javascript',
    'Vue',
    'n8n',
    'Chakra UI',
    'i18n',
    'Bubble',
    'Sass',
    'Styled Components',
    'Next.js',
    'Postman',
    'DBeaver',
    'AWS CloudWatch',
    'Git',
]

function Home() {
    const { t } = useTranslation()
    const { primary, primaryLight, themeColor } = useThemeColor()
    const bgColor = useColorModeValue('gray.50', 'gray.900')
    const cardBg = useColorModeValue('white', 'gray.800')

    return (
        <Box minH="100vh" bg={bgColor} py={8}>
            <Container maxW="container.lg">
                <VStack spacing={8} align="stretch">
                    {/* Header - Informações Pessoais */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <VStack spacing={{base:1, md:4}} align="flex-start">
                            <Heading as="h1" size={{base:"lg", md:"2xl"}} color={primary}>
                                {t('header.name')}
                            </Heading>
                            <Text fontSize={{base:"14px", md:"16px"}} fontWeight={600} color={useColorModeValue('gray.700', 'gray.300')}>
                                {t('header.profession')}
                            </Text>
                            <Stack 
                                spacing={6} 
                                mt={4}
                                direction={{ base: 'column', md: 'row' }}
                                align={{ base: 'flex-start', md: 'center' }}
                            >
                                <HStack>
                                    <EmailIcon />
                                    <Link href={`mailto:${t('contact.email')}`} color={primaryLight}>
                                        {t('contact.email')}
                                    </Link>
                                </HStack>
                                <HStack>
                                    <PhoneIcon />
                                    <Text color={primaryLight} >{t('contact.phone')}</Text>
                                </HStack>
                            </Stack>
                            <Stack 
                                spacing={4} 
                                mt={2}
                                direction={{ base: 'column', md: 'row' }}
                                align={{ base: 'flex-start', md: 'center' }}
                            >
                                <Text display={{ base: 'none', md: 'block' }}>•</Text>

                                <Link href="https://www.linkedin.com/in/elsonmanzalli/" color={primaryLight} isExternal>
                                    LinkedIn
                                </Link>
                                <Text display={{ base: 'none', md: 'block' }}>•</Text>
                                <Link href="https://github.com/manzallielson" color={primaryLight} isExternal>
                                    GitHub
                                </Link>
                            </Stack>
                        </VStack>
                    </Box>

                    {/* Sobre */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.about')}
                        </Heading>
                        <Divider mb={4} />
                        <Text color={useColorModeValue('gray.700', 'gray.300')} lineHeight="tall">
                            {t('about.text')}
                        </Text>
                    </Box>

                    {/* Experiência Profissional */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.experience')}
                        </Heading>
                        <Divider mb={4} />
                        <VStack spacing={6} align="stretch">
                            <Box>
                                <HStack justify="space-between" mb={2}>
                                    <Heading as="h3" size="md">
                                        {t('experience.barte.title')}
                                    </Heading>
                                    <Badge colorScheme={themeColor}>{t('experience.barte.period')}</Badge>
                                </HStack>
                                <Text fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
                                    {t('experience.barte.company')}
                                </Text>
                                <Text color={useColorModeValue('gray.700', 'gray.300')}>
                                    {t('experience.barte.description')}
                                </Text>
                            </Box>

                            <Divider />

                            <Box>
                                <HStack justify="space-between" mb={2}>
                                    <Heading as="h3" size="md">
                                        {t('experience.tm1.title')}
                                    </Heading>
                                    <Badge colorScheme={themeColor}>{t('experience.tm1.period')}</Badge>
                                </HStack>
                                <Text fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
                                    {t('experience.tm1.company')}
                                </Text>
                                <Text color={useColorModeValue('gray.700', 'gray.300')} mb={2}>
                                    {t('experience.tm1.responsibilities')}
                                </Text>
                                <Text color={useColorModeValue('gray.700', 'gray.300')}>
                                    <Text as="span" fontWeight="bold">{t('experience.tm1.impact')}</Text>
                                </Text>
                            </Box>
                        </VStack>
                    </Box>

                    {/* Formação Acadêmica */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.education')}
                        </Heading>
                        <Divider mb={4} />
                        <VStack spacing={4} align="stretch">
                            <Box>
                                <HStack justify="space-between" mb={2}>
                                    <Heading as="h3" size="md">
                                        {t('education.fatec.course')}
                                    </Heading>
                                    <Badge colorScheme="green">{t('education.fatec.period')}</Badge>
                                </HStack>
                                <Text fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')}>
                                    {t('education.fatec.institution')}
                                </Text>
                            </Box>
                        </VStack>
                    </Box>

                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.certificates')}
                        </Heading>
                        <Divider mb={4} />
                        <VStack spacing={4} align="stretch">
                            <Box>
                                <HStack justify="space-between" mb={2}>
                                    <Heading as="h3" size="md">
                                        {t('certificates.nlw.name')}
                                    </Heading>
                                    <Badge colorScheme="green">{t('certificates.nlw.date')}</Badge>
                                </HStack>
                                <Text fontWeight="semibold" color={useColorModeValue('gray.600', 'gray.400')}>
                                    {t('certificates.nlw.institution')}
                                </Text>
                            </Box>
                        </VStack>
                    </Box>


                    {/* Habilidades */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.skills')}
                        </Heading>
                        <Divider mb={4} />
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                            {habilidades.map((habilidade) => (
                                <Badge
                                    key={habilidade}
                                    colorScheme={themeColor}
                                    p={2}
                                    fontSize={{base:"12px", md:"14px"}}
                                    textAlign="center"
                                >
                                    {habilidade}
                                </Badge>
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* Projetos */}
                    <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="lg" mb={4} color={primary}>
                            {t('sections.projects')}
                        </Heading>
                        <Divider mb={4} />
                        <VStack spacing={6} align="stretch">
                            <Box>
                                <Heading as="h3" size="md" mb={2}>
                                    {t('projects.placeholder.name')}
                                </Heading>
                                <Text color={useColorModeValue('gray.700', 'gray.300')} mb={2}>
                                    {t('projects.placeholder.description')}
                                </Text>
                                <HStack>
                                    <Link href="#" color={primaryLight} fontSize="sm">
                                        {t('projects.placeholder.viewProject')}
                                    </Link>
                                    <Text fontSize="sm">•</Text>
                                    <Link href="#" color={primaryLight} fontSize="sm">
                                        {t('projects.placeholder.sourceCode')}
                                    </Link>
                                </HStack>
                            </Box>

                            <Divider />

                            <Box>
                                <Heading as="h3" size="md" mb={2}>
                                    {t('projects.placeholder.name')}
                                </Heading>
                                <Text color={useColorModeValue('gray.700', 'gray.300')} mb={2}>
                                    {t('projects.placeholder.description')}
                                </Text>
                                <HStack>
                                    <Link href="#" color={primaryLight} fontSize="sm">
                                        {t('projects.placeholder.viewProject')}
                                    </Link>
                                    <Text fontSize="sm">•</Text>
                                    <Link href="#" color={primaryLight} fontSize="sm">
                                        {t('projects.placeholder.sourceCode')}
                                    </Link>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default Home

