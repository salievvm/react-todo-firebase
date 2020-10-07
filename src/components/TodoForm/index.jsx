import React, {useState} from 'react';
import {
		List, ListItem,
		TextField
} from 'mdc-react';

import './index.scss';

export default function TodoForm() {
	const [title, setTitle] = useState('sdfmdc');

	return (
		<form className="todo-form">
			<List>
				<ListItem className="todo-form__list-item">
					<TextField
						label="Что нужно сделать..."
						value={title}
						onChange={setTitle}
						 />
				</ListItem>
			</List>
		</form>
	);
}