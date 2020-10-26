exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "design new model", discription: "It is must to have what the new model is going to look like" },
        { name: "buy all new things", address: "once you have the new deign you must buy the product you need" },
        { name: "remove all old things", address: "clean out all stuff and get it ready for new things" },
        
	])
}