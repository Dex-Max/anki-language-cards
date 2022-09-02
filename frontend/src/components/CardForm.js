import {Box, Paper} from "@mui/material";
import TextField from "./TextField";
import CardList from "./CardList";
import {useState} from "react";

const CardForm = () => {
	const [cards, setCards] = useState([]);

	const addCard = (event) => {
		event.preventDefault();
		console.log(event.target);
		console.log(event.target.word.value)
		setCards([...cards, {"word": event.target.word.value}]);
	}

	return (
		<Box>
			<TextField addCard={addCard}/>
			<CardList cards={cards}/>
		</Box>
	)
}

export default CardForm;