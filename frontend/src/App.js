import './App.css';
import SearchBar from "./components/SearchBar";
import ExportButton from "./components/ExportButton"
import {Container} from "@mui/material";

const App = () => {
	return (
		<Container>
			<SearchBar/>
			<ExportButton/>
		</Container>
	)
}

export default App;
