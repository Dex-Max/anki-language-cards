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
		<Paper
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:500 }}
		>
			<form onSubmit={handleSubmit}>
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