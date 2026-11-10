
import { useState } from 'react'

function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h3 className="note-title">{title}</h3>
      {showMore && <p className="note-body">{body}</p>}
      <button
        className="show-more"
        type="button"
        aria-expanded={showMore}
        onClick={() => setShowMore((expanded) => !expanded)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard
