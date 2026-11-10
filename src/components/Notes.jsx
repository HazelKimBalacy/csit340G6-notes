
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

  const [form, setForm] = useState({ title: '', body: '' })
  const [search, setSearch] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const title = form.title.trim()
    const body = form.body.trim()
    if (!title || !body) return

    const newNote = {
      id: crypto.randomUUID(),
      title: title,
      body: body,
    }

    setNotes((prevNotes) => [...prevNotes, newNote])
    setForm({ title: '', body: '' })
  }

  function handleDelete(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    )
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.trim().toLowerCase())
  )

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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <form className="new-note-form" onSubmit={handleSubmit}>
          <p className="field-label">New note</p>
          <input
            className="text-field"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            className="text-field note-textarea"
            name="body"
            placeholder="Write your note"
            value={form.body}
            onChange={handleChange}
          />
          <button className="add-note-button" type="submit">
            Add note
          </button>
        </form>
      </aside>

      <section className="notes-content">
        <h2 className="all-notes-title">All notes</h2>

        {filteredNotes.length === 0 ? (
          <p className="empty-message">No notes found</p>
        ) : (
          <ul className="notes-grid">
            {filteredNotes.map((note) => (
              <li className="note-card" key={note.id}>
                <NoteCard title={note.title} body={note.body} />
                <button
                  className="delete-note"
                  type="button"
                  aria-label={`Delete ${note.title}`}
                  onClick={() => handleDelete(note.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Notes
