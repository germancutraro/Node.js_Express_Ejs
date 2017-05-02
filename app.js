const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(path.join(__dirname, 'public')));


const languages = [
	{
		name: 'Javascript',
		typed: false
	},
	{
		name: 'Java',
		typed: true
	},
	{
		name: 'Python',
		typed: false
	},
	{
		name: 'C',
		typed: true
	}

]

app.get('/', (req, res) => {
	res.render('index', {
		languages: languages
	});
});

app.listen(port, () => console.log('Server running on port ' + port));

