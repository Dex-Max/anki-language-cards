import {Box, Paper} from "@mui/material";
import TextField from "./TextField";
import CardList from "./CardList";
import {useState} from "react";
import { translate } from "../translation"

const CardForm = ({ language }) => {
	const [cards, setCards] = useState([]);

	const addCard = (event) => {
		event.preventDefault();
		const word = event.target.word.value;
		translate(language, word).then(res => {
			setCards([...cards, {
				"word": word,
				"translation": res.data.translation
			}])
		})
	}

	return (
		<Box>
			<TextField addCard={addCard}/>
			<CardList cards={cards}/>
		</Box>
	)
}

export default CardForm;