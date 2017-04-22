module.exports.hotelsGetAll = function(req, res) {
	console.log('GET the JSON object!');
		res
		.status(200)
		.json({
			'jsonData': true
		});
} 