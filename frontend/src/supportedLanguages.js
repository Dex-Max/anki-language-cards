import axios from 'axios'

const getSupportedLanguages = () => {
	axios.get("http://localhost:3001/languages").then(res => {
		return res.data;
	})
}

export default getSupportedLanguages