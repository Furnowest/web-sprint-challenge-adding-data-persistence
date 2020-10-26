
exports.up = async function(knex) {

    await knex.schema.createTable("project",(table)=>{
        table.increments("id")
        table.text("name").notNull()
        table.text("discription")
        table.bool("completed").defaultTo(false)
      })
      
      await knex.schema.createTable("resources", (table)=>{
          table.increments("id")
          table
             .integer("project_id")
             .references("id")
             .inTable("project")
             .notNull()
         table.text("name").notNull()
         table.text("discription")
      })
      await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table
            .integer("project_id")
            .references("id")
            .inTable("project")
            .notNull()
        table.text("name").notNull()
        table.text("discription")
        table.bool("completed").defaultTo(false)    
            // .onDelete("CASCADE")
            // .onUpdate("CASCADE")
            // .notNull()
            
      })
  
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("project")
  
};
