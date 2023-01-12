import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewNote from './NewNote';
import 'bootstrap/dist/css/bootstrap.min.css';

export type Tag = {
  id: string, 
  label: string,
}

export type NoteData = {
  title: string, 
  markdown: string, 
  tags: Tag[]
}

export type Note = {
  id: string
} & NoteData;



const App = () => {
	return (
		<Container className='my-4'>
			<Routes>
				<Route path='/' element={<h1>Hello</h1>} />
				<Route path='/new' element={<NewNote />} />
				<Route path='/:id' element={<h1>item</h1>}>
					<Route index element={<h1>Show</h1>} />
					<Route path='edit' element={<h1>Edit</h1>} />
				</Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Container>
	);
}

export default App;
