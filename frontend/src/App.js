import './App.css';
import { Container, Grid } from "@mui/material";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import ExportButton from "./components/ExportButton";
import SearchBar from "./components/SearchBar";
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
	const [language, setLanguage] = useState("");
	const [languageList, setLanguageList] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/languages')
			.then(res => {
				setLanguageList(res.data);
			})
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
