type ThemeColor = 'blue' | 'green' | 'purple' | 'pink' | 'orange' | 'red' | 'teal' | 'cyan' | 'black'

export function useThemeColor() {
  const themeColor = (localStorage.getItem('themeColor') || 'blue') as ThemeColor
  
  // Para black, usar cores customizadas já que não existe black no Chakra UI
  if (themeColor === 'black') {
    return {
      primary: '#000000',
      primaryLight: '#1a1a1a',
      primaryDark: '#000000',
      primaryBg: '#f5f5f5',
      themeColor: 'black',
    }
  }
  
  return {
    primary: `${themeColor}.600`,
    primaryLight: `${themeColor}.500`,
    primaryDark: `${themeColor}.700`,
    primaryBg: `${themeColor}.50`,
    themeColor,
  }
}

