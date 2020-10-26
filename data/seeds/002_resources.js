exports.seed = async function(knex) {
	await knex("resources").insert([
        { project_id: 1 ,name: "google ", discription: "check out on the internet" },
        { project_id: 2 ,name: "money", discription: "" },
        { project_id: 2 ,name: "stores", discription: " go out and do a lots of shopping" },
        { project_id: 3 ,name: "tools", discription: "use the proper tools to start the remodel" }	
	])
}
