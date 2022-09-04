import './App.css';
import { Container } from "@mui/material";
import CardForm from "./components/CardForm";
import ExportButton from "./components/ExportButton";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { getSupportedLanguages } from "./translation"

const App = () => {
	const [language, setLanguage] = useState("");
	const [languageList, setLanguageList] = useState([]);
	const [cards, setCards] = useState([]);

	console.log(cards)

	useEffect(() => {
		getSupportedLanguages().then(res => setLanguageList(res.data));
	}, [])

	const changeLanguage = (lang) => {
		setLanguage(lang);
		console.log(`Language changed to ${lang}`);
	}

	const addCard = (card) => {
		setCards([...cards, card]);
	}

	return (
		<Container>
			<SearchBar languageList={languageList} changeLanguage={changeLanguage}/>
			<CardForm language={language} cards={cards} addCard={addCard}/>
			<ExportButton cards={cards}/>
		</Container>
	)
}

export default App;
