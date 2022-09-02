import './App.css';
import { Container, Grid } from "@mui/material";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import ExportButton from "./components/ExportButton";
import SearchBar from "./components/SearchBar";

const App = () => {
	return (
		<Container>
			<SearchBar/>
			<CardForm/>
			<ExportButton/>

		</Container>
	)
}

export default App;
