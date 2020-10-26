const db = require("../data/dbconfig")

function getTask() {
    return db("task")
      .join("project","id", "project_id" )
      .select("task.description ", "task.completed", "project.name", "project.description")
}
module.exports ={
    getTask,
}