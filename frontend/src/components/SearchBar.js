import {FormControl, InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SearchBar = ({ changeLanguage, languageList }) => {
	const handleLanguageChange = (event) => {
		changeLanguage(event.target.value);
	};

	if(languageList.length) {
		return (
			<FormControl sx={{ 'width': '100%'}}>
				<InputLabel id="language-select-label">Target Language</InputLabel>
				<Select
					labelId="language-select-label"
					id="language-select"
					name="language"
					defaultValue=""
					onChange={handleLanguageChange}
				>
					{
						languageList.map((language) => {
							return <MenuItem key={language.code} value={language.code}>{language.name}</MenuItem>
						})
					}
				</Select>
			</FormControl>
		)
	} else {
		return <div></div>
	}
}

export default SearchBar;