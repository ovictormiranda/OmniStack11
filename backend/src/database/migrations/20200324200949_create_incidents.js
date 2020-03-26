
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
       //primary key
        table.increments();
        
        //table columns 
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Relation
        table.string('ong_id').notNullable();

        //Create a Foreign key
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
