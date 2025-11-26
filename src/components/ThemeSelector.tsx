import {
  Box,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useThemeColor } from '../hooks/useThemeColor'

type ThemeColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'black'

interface ThemeOption {
  color: ThemeColor
  label: string
  icon: string
}

function ThemeSelector() {
  const { themeColor } = useThemeColor()

  const themes: ThemeOption[] = [
    { color: 'blue', label: 'Blue', icon: '🔵' },
    { color: 'green', label: 'Green', icon: '🟢' },
    { color: 'purple', label: 'Purple', icon: '🟣' },
    { color: 'orange', label: 'Orange', icon: '🟠' },
    { color: 'red', label: 'Red', icon: '🔴' },
    { color: 'black', label: 'Black', icon: '⚫' },
  ]

  const handleThemeChange = (color: ThemeColor) => {
    localStorage.setItem('themeColor', color)
    // Recarrega a página para aplicar o novo tema
    window.location.reload()
  }

  return (
    <VStack align="stretch" spacing={2}>
      {themes.map((theme) => (
        <Button
          key={theme.color}
          onClick={() => handleThemeChange(theme.color)}
          size="md"
          variant={themeColor === theme.color ? 'solid' : 'outline'}
          colorScheme={theme.color === 'black' ? 'gray' : theme.color}
          bg={themeColor === theme.color ? (theme.color === 'black' ? '#000000' : `${theme.color}.500`) : 'transparent'}
          color={themeColor === theme.color ? 'white' : `${theme.color}.600`}
          borderColor={themeColor === theme.color ? 'transparent' : `${theme.color}.300`}
          _hover={{
            bg: themeColor === theme.color 
              ? (theme.color === 'black' ? '#1a1a1a' : `${theme.color}.600`)
              : `${theme.color}.50`,
            borderColor: `${theme.color}.400`,
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          }}
          transition="all 0.2s"
          leftIcon={<Box as="span" fontSize="lg">{theme.icon}</Box>}
          justifyContent="flex-start"
        >
          {theme.label}
        </Button>
      ))}
    </VStack>
  )
}

export default ThemeSelector

