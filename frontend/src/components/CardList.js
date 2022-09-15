import {Card, CardContent, Container, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CardList = ({ cards, deleteCard }) => {
	if(cards.length){
		return (
			<Container>
				{
					cards.map(card => {
							return (
								<Card key={card.word}>
									<CardContent>
										<Typography sx={{ fontSize: 14}}>
											{card.word} {card.translation}
										</Typography>
									</CardContent>
									<IconButton onClick={() => deleteCard(card.word)}>
										<DeleteIcon/>
									</IconButton>
								</Card>
							)
					})
				}
			</Container>
		)
	} else {
		return (
			<h1>No cards</h1>
		)
	}
}

export default CardList