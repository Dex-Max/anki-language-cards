import axios from 'axios'

const getSupportedLanguages = () => {
	return axios.get("http://localhost:3001/languages");
}

const translate = (language, word) => {
	return axios.post("http://localhost:3001/translate", {language: language, text: word});
}

export {
	getSupportedLanguages,
	translate
}