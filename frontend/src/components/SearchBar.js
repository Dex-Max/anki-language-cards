import {FormControl, InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, {useState, useEffect} from "react";
import supportedLanguages from "../supportedLanguages";
import getSupportedLanguages from "../supportedLanguages";
import axios from 'axios'

const SearchBar = () => {
	const [language, setLanguage] = React.useState('');
	const [supportedLanguages, setSupportedLanguages] = React.useState([]);
	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};

	useEffect(() => {
		axios.get('http://localhost:3001/languages')
			.then(res => {
				setSupportedLanguages(res.data);
			})
	}, [])

	if(supportedLanguages.length) {
		return (
			<FormControl sx={{ 'width': '100%'}}>
				<InputLabel id="language-select-label">Target Language</InputLabel>
				<Select
					labelId="language-select-label"
					id="language-select"
					value={language}
					onChange={handleLanguageChange}
				>
					{
						supportedLanguages.map((language) => (
							<MenuItem key={language.code}>{language.name}</MenuItem>
						))
					}
				</Select>
			</FormControl>
		)
	} else {
		return <div></div>
	}
}

export default SearchBar;