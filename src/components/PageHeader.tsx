import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../hooks/useThemeColor'

function PageHeader() {
  const location = useLocation()
  const { t } = useTranslation()
  const { primary } = useThemeColor()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  // Mapear rotas para chaves de tradução
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return t('sidebar.resume')
      case '/projetos':
        return t('sidebar.projects')
      case '/storybook':
        return t('sidebar.storybook')
      case '/design-system':
        return t('sidebar.designSystem')
      default:
        return t('sidebar.title')
    }
  }

  return (
    <Box
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={{ base: 4, md: 8 }}
      py={5}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Heading
        as="h1"
        size={{ base: 'lg', md: 'xl' }}
        color={primary}
        fontWeight="bold"
      >
        {getPageTitle()}
      </Heading>
    </Box>
  )
}

export default PageHeader

