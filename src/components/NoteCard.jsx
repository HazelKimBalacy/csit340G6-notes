import { useState, useContext, memo } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ id, title, body, onDelete }) {
  const [showMore, setShowMore] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3 className={largeText ? 'note-title note-title-large' : 'note-title'}>
        {title}
      </h3>
      {showMore && (
        <p className={largeText ? 'note-body note-body-large' : 'note-body'}>
          {body}
        </p>
      )}
      <button
        className="show-more"
        type="button"
        aria-expanded={showMore}
        onClick={() => setShowMore((expanded) => !expanded)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
      <button
        className="delete-note"
        type="button"
        aria-label={`Delete ${title}`}
        onClick={() => onDelete(id)}
      >
        ×
      </button>
    </div>
  )
}

export default memo(NoteCard)