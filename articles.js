const ARTICLES = require('./mock-articles');

module.exports = (app) => {
	app.get('/articles', (req, res) => {
		res.send(ARTICLES);
	});

	app.get('/articles/:key', (req, res) => {
		res.send(
			ARTICLES.filter(article => article.key === req.params.key)[0]
		);
	});
};
