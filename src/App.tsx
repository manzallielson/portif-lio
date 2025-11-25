import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import LanguageSelector from './components/LanguageSelector'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Storybook from './pages/Storybook'
import DesignSystem from './pages/DesignSystem'

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <LanguageSelector />
        <Box
          ml={{ base: 0, md: '250px' }}
          flex="1"
          minH="100vh"
          pt={{ base: '60px', md: 0 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/storybook" element={<Storybook />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App

