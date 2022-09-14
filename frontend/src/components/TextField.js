import './TextField.css'
import { IconButton, InputBase, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";

const TextField = ({ submitWord }) => {
	const [word, setWord] = useState("");

	const handleWordChange = (event) => {
		setWord(event.target.value);
	}

	const handleSubmit = (event) => {
		setWord("");
		submitWord(event);
	}

	return (
		<Paper sx={{width: '50%'}}>
			<form onSubmit={handleSubmit} className="form">
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Enter word"
					name="word"
					value={word}
					onChange={handleWordChange}
				/>
				<IconButton
					type="submit"
					sx={{ p: '10px' }}>
					<AddIcon/>
				</IconButton>
			</form>
		</Paper>
	)
}

export default TextField