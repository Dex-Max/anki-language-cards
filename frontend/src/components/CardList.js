import {Card, CardContent, Container, Typography} from "@mui/material";

const CardList = ({ cards }) => {
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