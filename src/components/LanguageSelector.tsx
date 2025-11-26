import {
  Button,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()
  const themeColor = (localStorage.getItem('themeColor') || 'blue') as string

  const languages = [
    { code: 'pt-BR', label: '🇧🇷 Português (BR)' },
    { code: 'en-US', label: '🇺🇸 English (US)' },
  ]

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  const getBgColor = (isActive: boolean) => {
    if (!isActive) return 'transparent'
    return themeColor === 'black' ? '#000000' : `${themeColor}.500`
  }

  const getTextColor = (isActive: boolean) => {
    if (isActive) return 'white'
    return themeColor === 'black' ? '#000000' : `${themeColor}.600`
  }

  const getBorderColor = (isActive: boolean) => {
    if (isActive) return 'transparent'
    return themeColor === 'black' ? '#000000' : `${themeColor}.300`
  }

  const getHoverBg = (isActive: boolean) => {
    if (isActive) {
      return themeColor === 'black' ? '#1a1a1a' : `${themeColor}.600`
    }
    return themeColor === 'black' ? 'gray.50' : `${themeColor}.50`
  }

  return (
    <VStack align="stretch" spacing={2}>
      {languages.map((lang) => {
        const isActive = i18n.language === lang.code
        return (
          <Button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            size="md"
            variant={isActive ? 'solid' : 'outline'}
            colorScheme={themeColor === 'black' ? 'gray' : themeColor}
            bg={getBgColor(isActive)}
            color={getTextColor(isActive)}
            borderColor={getBorderColor(isActive)}
            _hover={{
              bg: getHoverBg(isActive),
              borderColor: themeColor === 'black' ? '#000000' : `${themeColor}.400`,
              transform: 'translateY(-2px)',
              boxShadow: 'md',
            }}
            transition="all 0.2s"
            justifyContent="flex-start"
          >
            {lang.label}
          </Button>
        )
      })}
    </VStack>
  )
}

export default LanguageSelector

