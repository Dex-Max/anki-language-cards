import './App.css';
import SearchBar from "./components/SearchBar";
import ExportButton from "./components/ExportButton"
import { Paper, Container, Grid } from "@mui/material";
import CustomizedInputBase from "./components/MapInput";
import TextField from "./components/TextField"

const App = () => {
	return (
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<SearchBar/>
				</Grid>
				<Grid item xs={9}>
					<TextField/>
				</Grid>
				<Grid item xs={3}>
					<ExportButton/>
				</Grid>
			</Grid>



		</Container>
	)
}

export default App;
