import { useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import './App.css'

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="app">
        <Notes />
        <Info name="Hazel Kim Balacy" />
      </div>
    </SettingsContext>
  )
}

export default App
