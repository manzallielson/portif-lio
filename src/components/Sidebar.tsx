import {
  Box,
  VStack,
  Link,
  Text,
  Divider,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../hooks/useThemeColor'
import Config from './Config'

interface NavItem {
  translationKey: string
  path: string
}

// Componente do conteúdo do menu (reutilizável)
function MenuContent({ onClose }: { onClose?: () => void }) {
  const { t } = useTranslation()
  const location = useLocation()
  const { primary, primaryBg } = useThemeColor()
  const activeBg = primaryBg
  const hoverBg = 'gray.50'

  const navItems: NavItem[] = [
    { translationKey: 'sidebar.resume', path: '/' },
    { translationKey: 'sidebar.projects', path: '/projetos' },
    { translationKey: 'sidebar.storybook', path: '/storybook' },
    { translationKey: 'sidebar.designSystem', path: '/design-system' },
  ]

  return (
    <VStack spacing={0} align="stretch" p={6} h="100%" display="flex" flexDirection="column">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={primary}
        mb={6}
        px={2}
        letterSpacing="tight"
      >
        {t('sidebar.title')}
      </Text>
      <Divider mb={6} borderColor="gray.200" />
      <VStack spacing={2} align="stretch" flex="1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              as={RouterLink}
              to={item.path}
              onClick={onClose}
              px={4}
              py={4}
              borderRadius="lg"
              bg={isActive ? activeBg : 'transparent'}
              color={primary}
              fontSize="lg"
              fontWeight={isActive ? 'bold' : 'semibold'}
              _hover={{
                bg: isActive ? activeBg : hoverBg,
                textDecoration: 'none',
                transform: 'translateX(4px)',
              }}
              transition="all 0.2s ease"
              borderLeft={isActive ? `4px solid ${primary}` : '4px solid transparent'}
            >
              {t(item.translationKey)}
            </Link>
          )
        })}
      </VStack>
      
      <Box mt="auto" pt={6}>
        <Divider mb={6} borderColor="gray.200" />
        <Config />
      </Box>
    </VStack>
  )
}

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  // Sidebar desktop (fixo)
  const DesktopSidebar = () => (
    <Box
      w="280px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      position="fixed"
      left={0}
      top={0}
      boxShadow="lg"
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
    >
      <MenuContent />
    </Box>
  )

  // Ícone hambúrguer SVG
  const HamburgerIcon = () => (
    <Icon viewBox="0 0 24 24" boxSize={6}>
      {isOpen ? (
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        />
      )}
    </Icon>
  )

  // Botão hambúrguer para mobile
  const MobileMenuButton = () => {
    const { t } = useTranslation()
    const bgColor = useColorModeValue('white', 'gray.800')
    return (
      <IconButton
        aria-label={t('sidebar.openMenu')}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        top={4}
        left={4}
        zIndex={1001}
        bg={bgColor}
        boxShadow="md"
        size="md"
      />
    )
  }

  return (
    <>
      <DesktopSidebar />
      <MobileMenuButton />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{t('sidebar.menu')}</DrawerHeader>
          <DrawerBody p={0}>
            <MenuContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar

