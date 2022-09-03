const fs = require('fs');
const AnkiExport = require('anki-apkg-export').default

const exportDeck = async (name, cards) => {
	const apkg = new AnkiExport(name);

	for(const card of cards) {
		console.log(card)
		apkg.addCard(card.translation, card.word);
	}

	await apkg
		.save()
		.then(zip => {
			fs.writeFileSync(`./${name}.apkg`, zip, 'binary');
			console.log(`Package exported to ${name}.apkg`);
		})
		.catch(err => {
			console.log(err.stack || err)
		});
}

module.exports = exportDeck;