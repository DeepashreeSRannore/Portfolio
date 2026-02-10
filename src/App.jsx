import { ThemeProvider } from './contexts/ThemeContext'
import PortfolioPage from './components/PortfolioPage'
import NavigationBar from './components/NavigationBar'
import ThemeSwitcher from './components/ThemeSwitcher'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavigationBar />
        <ThemeSwitcher />
        <PortfolioPage />
      </div>
    </ThemeProvider>
  )
}

export default App
