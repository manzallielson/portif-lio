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

interface NavItem {
  translationKey: string
  path: string
}

// Componente do conteúdo do menu (reutilizável)
function MenuContent({ onClose }: { onClose?: () => void }) {
  const { t } = useTranslation()
  const location = useLocation()
  const activeBg = useColorModeValue('blue.50', 'blue.900')
  const activeColor = useColorModeValue('blue.600', 'blue.300')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  const navItems: NavItem[] = [
    { translationKey: 'sidebar.resume', path: '/' },
    { translationKey: 'sidebar.projects', path: '/projetos' },
    { translationKey: 'sidebar.storybook', path: '/storybook' },
    { translationKey: 'sidebar.designSystem', path: '/design-system' },
  ]

  return (
    <VStack spacing={0} align="stretch" p={4}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="blue.600"
        mb={4}
        px={4}
        py={2}
      >
        {t('sidebar.title')}
      </Text>
      <Divider mb={4} />
      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <Link
            key={item.path}
            as={RouterLink}
            to={item.path}
            onClick={onClose}
            px={4}
            py={3}
            borderRadius="md"
            bg={isActive ? activeBg : 'transparent'}
            color={isActive ? activeColor : 'gray.700'}
            fontWeight={isActive ? 'semibold' : 'normal'}
            _hover={{
              bg: isActive ? activeBg : hoverBg,
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            {t(item.translationKey)}
          </Link>
        )
      })}
    </VStack>
  )
}

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()
  const bgColor = useColorModeValue('white', 'gray.800')

  // Sidebar desktop (fixo)
  const DesktopSidebar = () => (
    <Box
      w="250px"
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor="gray.200"
      position="fixed"
      left={0}
      top={0}
      boxShadow="sm"
      display={{ base: 'none', md: 'block' }}
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
        bg="white"
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

