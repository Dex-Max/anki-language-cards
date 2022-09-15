import './App.css';
import { Container, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import CardForm from "./components/CardForm";
import ExportButton from "./components/ExportButton";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { getSupportedLanguages } from "./translation"

const App = () => {
	const [language, setLanguage] = useState("");
	const [languageList, setLanguageList] = useState([]);
	const [cards, setCards] = useState([]);

	const theme = createTheme({
		palette: {
			mode: "dark"
		}
	})


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

	const deleteCard = (word) => {
		setCards(cards.filter(card => card.word !== word))
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<Container>
				<SearchBar languageList={languageList} changeLanguage={changeLanguage}/>
				<CardForm language={language} cards={cards} addCard={addCard} deleteCard={deleteCard}/>
				<ExportButton cards={cards}/>
			</Container>
		</ThemeProvider>
	)
}

export default App;
