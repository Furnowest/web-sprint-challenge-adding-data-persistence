const db = require("../data/dbconfig")

function getResources() {
	return db("resources")
}
module.exports ={
    getResources,
}