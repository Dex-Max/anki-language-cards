const express = require('express');
const fs = require('fs');
const cors = require('cors');
const {default: AnkiExport} = require("anki-apkg-export");
const {Translate} = require('@google-cloud/translate').v2;
const exportDeck = require('./export');

const app = express()
const translate = new Translate();

app.use(cors());
app.use(express.json());

app.get('/languages', async (req, res) => {
	let [languages] = await translate.getLanguages();

	res.json(languages);
})

app.post('/translate', async (req, res) => {
	const {text, language} = req.body;
	let [translation] = await translate.translate(text, language);
	res.json({"translation": translation});
})

app.post('/export',async (req, res) => {
	const { name, cards } = req.body;
	exportDeck(name, cards);

	const exportData = fs.readFileSync(`${__dirname}/${name}`, null);

	res.send(exportData);
})

app.post('/download', function(req, res){
	const file = `${__dirname}/output.apkg`;
	res.download(file); // Set disposition and send it.
});


app.listen(3001, () => {
	console.log('Listening Port 3001');
})