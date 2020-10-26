exports.seed = async function(knex) {
	await knex("resources").insert([
        { project_id: 1 , discription: "pinterst and search other websites that will help with process", completesd: true },
        { project_id: 2 , discription: "save money to buy furnitures", completesd: true },
        { project_id: 2 , discription: "buy new furnitures", completesd: false },
        { project_id: 3 , discription: "learn how to use tools", completesd: false },
	])
}
