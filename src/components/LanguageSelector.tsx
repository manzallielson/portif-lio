import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()
  const bgColor = useColorModeValue('white', 'gray.800')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  const languages = [
    { code: 'pt-BR', label: '🇧🇷 Português (BR)' },
    { code: 'en-US', label: '🇺🇸 English (US)' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <Box position="fixed" top={4} right={4} zIndex={1001}>
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          bg={bgColor}
          boxShadow="md"
          _hover={{ bg: hoverBg }}
        >
          {currentLanguage.label}
        </MenuButton>
        <MenuList>
          {languages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              bg={i18n.language === lang.code ? 'blue.50' : 'transparent'}
            >
              {lang.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default LanguageSelector

