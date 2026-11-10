
import { useState } from 'react'

function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h3 className="note-title">{title}</h3>
      <p className="note-body">
        {showMore ? body : `${body.slice(0, 80)}${body.length > 80 ? '...' : ''}`}
      </p>
      {body.length > 80 && (
        <button
          className="show-more"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}

export default NoteCard
