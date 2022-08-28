const fs = require('fs');
const AnkiExport = require('anki-apkg-export').default

const exportDeck = (name, cards) => {
	const apkg = new AnkiExport('deck-name')

	apkg.addCard('card 1 front', 'card 1 back');
	apkg.addCard('card 2 front', 'card 2 back');

	apkg
		.save()
		.then(zip => {
			fs.writeFileSync('output.apkg', zip, 'binary');
			console.log('Package exported to output.pkg');
		})
		.catch(err => console.log(err.stack || err));
}

module.exports = exportDeck;