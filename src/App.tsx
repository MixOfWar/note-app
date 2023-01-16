import { Routes, Route, Navigate } from 'react-router-dom'
import { NoteData, RawNote, Tag } from './utils/types'
import useLocalStorage from './utils/useLocalStorage'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NoteLayout from './pages/NoteLayout'
import { v4 as uuidV4 } from 'uuid'
import { useMemo } from 'react'
import NewNote from './pages/NewNote'
import EditNote from './pages/EditNote'
import NoteList from './pages/NoteList'
import Note from './components/Note'
import { defaultNoteData, defaultTagData } from './utils/defaultData'

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [defaultNoteData])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [...defaultTagData])

	const notesWithTags = useMemo(() => {
		return notes.map((note) => {
			return {
				...note,
				tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
			}
		})
	}, [notes, tags])

	const onCreateNote = ({ tags, ...data }: NoteData) => {
		setNotes((prevNotes) => {
			return [
				...prevNotes,
				{ ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
			]
		})
  }

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  const onDeleteNote = (id: string) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

	const addTag = (tag: Tag) => {
		setTags((prev) => [...prev, tag])
  }

  const updateTag = (id: string, label: string) => {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag;
        }
      })
    })
  }

  const deleteTag = (id: string) => {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

	return (
		<Container className='my-4'>
			<Routes>
				<Route
					path='/'
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
				/>
				<Route
					path='/new'
					element={
						<NewNote
							onSubmit={onCreateNote}
							onAddTag={addTag}
							availableTags={tags}
						/>
					}
				/>
        <Route path='/:id' element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path='edit'
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            } />
				</Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Container>
	)
}

export default App
