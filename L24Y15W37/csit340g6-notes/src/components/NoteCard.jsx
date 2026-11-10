function NoteCard({ title, body }) {
  return (
    <div>
      <h3 className="note-title">{title}</h3>
      <p className="note-body">{body}</p>
      <button className="show-more" type="button">
        Show more
      </button>
    </div>
  )
}

export default NoteCard
