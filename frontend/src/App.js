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

	useEffect(() => {
		getSupportedLanguages().then(res => setLanguageList(res.data));
	}, [])

	const changeLanguage = (lang) => {
		setLanguage(lang);
		console.log(`Language changed to ${lang}`);
	}

	return (
		<Container>
			<SearchBar languageList={languageList} changeLanguage={changeLanguage}/>
			<CardForm language={language}/>
			<ExportButton/>
		</Container>
	)
}

export default App;
