const fs = require('fs');
const AnkiExport = require('anki-apkg-export').default

const exportDeck = (name, cards) => {
	const apkg = new AnkiExport(name);

	for(let card in cards) {
		apkg.addCard(card.translation, card.word);
	}

	apkg
		.save()
		.then(zip => {
			fs.writeFileSync(name, zip, 'binary');
			console.log(`Package exported to ${name}.apkg`);
		})
		.catch(err => console.log(err.stack || err));
}

module.exports = exportDeck;