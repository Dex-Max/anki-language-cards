import {Box, Paper} from "@mui/material";
import TextField from "./TextField";
import CardList from "./CardList";
import { translate } from "../translation"

const CardForm = ({ language, cards, addCard }) => {
	const submitWord = (event) => {
		event.preventDefault();
		const word = event.target.word.value;

		translate(language, word).then(res => {
			addCard({
				"word": word,
				"translation": res.data.translation
			})
		})
	}

	return (
		<Box>
			<TextField submitWord={submitWord}/>
			<CardList cards={cards}/>
		</Box>
	)
}

export default CardForm;