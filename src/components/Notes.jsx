import NoteCard from './NoteCard.jsx'

function Notes() {
  return (
    <div className="notes-layout">
      <aside className="notes-sidebar">
        <h1 className="notes-logo">notes</h1>

        <div className="sidebar-field">
          <label className="field-label" htmlFor="search">
            Search
          </label>
          <input
            className="text-field"
            id="search"
            placeholder="Search by title"
          />
        </div>

        <form className="new-note-form">
          <p className="field-label">New note</p>
          <input className="text-field" placeholder="Title" />
          <textarea
            className="text-field note-textarea"
            placeholder="Write your note"
          />
          <button className="add-note-button" type="button">
            Add note
          </button>
        </form>
      </aside>

      <section className="notes-content">
        <h2 className="all-notes-title">All notes</h2>
        <ul className="notes-grid">
          <li className="note-card">
            <NoteCard
              title="Review map and filter"
              body="Redo the TodoMVC steps without looking at the guide."
            />
            <button
              className="delete-note"
              type="button"
              aria-label="Delete Review map and filter"
            >
              ×
            </button>
          </li>
          <li className="note-card">
            <NoteCard
              title="Prepare for the quiz"
              body="Practice writing one handler for many inputs."
            />
            <button
              className="delete-note"
              type="button"
              aria-label="Delete Prepare for the quiz"
            >
              ×
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Notes
