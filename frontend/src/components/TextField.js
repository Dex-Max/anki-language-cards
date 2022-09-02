import { IconButton, InputBase, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const TextField = () => {


	return (
		<Paper
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:500 }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Enter word"
			/>
			<IconButton type="button" sx={{ p: '10px' }}>
				<AddIcon/>
			</IconButton>
		</Paper>
		/*
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
		>
			<IconButton sx={{ p: '10px' }} aria-label="menu">
				<MenuIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Google Maps"
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
				<DirectionsIcon />
			</IconButton>
		</Paper>

		 */
	)
}

export default TextField