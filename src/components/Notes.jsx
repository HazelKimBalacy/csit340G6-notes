
import { useState } from 'react'
import NoteCard from './NoteCard.jsx'

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Review map and filter',
      body: 'Redo the TodoMVC steps without looking at the guide.',
    },
    {
      id: 2,
      title: 'Prepare for the quiz',
      body: 'Practice writing one handler for many inputs.',
    },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

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
          <input
            className="text-field"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="text-field note-textarea"
            placeholder="Write your note"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <button className="add-note-button" type="button">
            Add note
          </button>
        </form>
      </aside>

      <section className="notes-content">
        <h2 className="all-notes-title">All notes</h2>
        <ul className="notes-grid">
          {notes.map((note) => (
            <li className="note-card" key={note.id}>
              <NoteCard title={note.title} body={note.body} />
              <button
                className="delete-note"
                type="button"
                aria-label={`Delete ${note.title}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Notes
