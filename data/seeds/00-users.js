
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'bronchi'},
        {id: 2, name: 'zakabopi'},
        {id: 3, name: 'vakozor'}
      ]);
    });
};
