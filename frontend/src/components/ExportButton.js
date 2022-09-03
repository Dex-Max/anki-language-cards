import React from 'react'
import Button from '@mui/material/Button'

const ExportButton = ({ cards }) => {
	const handleExportClick = async () => {
		console.log(cards)
		const res = await fetch('http://localhost:3001/export', {
			method: 'POST',
			body: { name: "deck.apkg", cards: cards }
		});

		res.blob().then(blob => {
			let url = window.URL.createObjectURL(blob);
			let a = document.createElement('a');
			a.href = url;
			a.download = 'deck.apkg';
			a.click();
		});
	}

	return (
		<Button variant="contained" onClick={handleExportClick}>Export</Button>
	)
}

export default ExportButton