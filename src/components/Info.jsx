import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function Info({ name }) {
  const { largeText, setLargeText } = useContext(SettingsContext)

  return (
    <footer className="info">
      <button
        type="button"
        className="large-text-button"
        onClick={() => setLargeText(!largeText)}
      >
        {largeText ? 'Normal text' : 'Large text'}
      </button>
      <p>Created by {name}</p>
    </footer>
  )
}

export default Info