import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { FaMoon, FaSun, FaRobot } from 'react-icons/fa'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { id: 'dark', name: 'Galaxy', icon: <FaMoon /> },
    { id: 'light', name: 'Nature', icon: <FaSun /> },
    { id: 'tech', name: 'Tech', icon: <FaRobot /> }
  ]

  const currentTheme = themes.find(t => t.id === theme) || themes[0]

  return (
    <div className={`theme-switcher ${isOpen ? 'open' : ''}`}>
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        {currentTheme.icon}
      </button>
      <div className="theme-options">
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            className={`theme-option ${theme === themeOption.id ? 'active' : ''}`}
            onClick={() => {
              toggleTheme(themeOption.id)
              setIsOpen(false)
            }}
            aria-label={`Switch to ${themeOption.name} theme`}
          >
            {themeOption.icon}
            <span>{themeOption.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ThemeSwitcher
