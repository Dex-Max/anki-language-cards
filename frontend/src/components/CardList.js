import {useState} from "react";
import {Card, CardContent, Container, Paper, Typography} from "@mui/material";

const CardList = ({ cards }) => {
	console.log(cards.length)
	if(cards.length){
		return (
			<Container>
				{
					cards.map(card => {
						console.log(card)
							return (
								<Card key={card.word}>
									<CardContent>
										<Typography variant="h5" component="div">
											{card.word}
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