import { MdDeleteForever } from 'react-icons/md';
import style from 'styled-components';
import "../index.css";
import {BorderRed, BorderNavy, DivYellow} from './DivBorder';
const DivWidth = style.div `
width: 100%;
background-color: rgb(241, 227, 160);
padding-top: 0px;
margin-top: 0px;
`;
const Note = ({ id, text, date, handleDeleteNote }) => {
 
	return (
		<DivWidth>
			<DivYellow>
				<div className='paper'>
			<div className='pattern'>
			<BorderNavy>
		
			<span>{text}</span>
			</BorderNavy>
			<BorderRed>
				
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
			</BorderRed>
		</div>
		</div>
		</DivYellow>
		</DivWidth>		
	)};
export default Note;
