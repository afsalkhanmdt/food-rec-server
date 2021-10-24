const db = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'food-reci'
    }
  });

const insertData = (tableName, data) => {

    return db(tableName)
            .insert(data)
            .then(resp => resp);
}

const selectData = (tableName, options = { fields: [], filteringConditions: [] }) => {

    const { fields, filteringConditions } = options

    return db(tableName)
            .select(fields)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });

            })
            .then(data => data);
}

const updateData = (tableName, options = { fields: {}, filteringConditions: [] }) => {

    const { fields, filteringConditions } = options

    return db(tableName)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });

            })
            .update(fields)
            .then(data => data);
}

const deleteData = (tableName, options = { filteringConditions: [] }) => {

    const { filteringConditions } = options

    return db(tableName)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });
            })
            .del()
            .then(data => data);
}

module.exports = {
    insertData,
    selectData,
    updateData,
    deleteData
}


// deleteData('users', {
//     filteringConditions: [
//         ['id', '=', 1]
//     ]
// })
// .then(deleteData => {
//     console.log(deleteData)
// })

// updateData('users', {
//     fields: {
//         name: 'Rojin',
//     },
//     filteringConditions: [
//         ['id', '=', 1]
//     ]
// })
// .then(updateData => {
//     console.log(updateData)
// })

// selectData('users')
// .then(users => {
//     console.log(users)
// });

// insertData('users', [
//     {
//         name: 'Rojin',
//         userName: 'user',
//         email: 'rojin@gmail.com',
//         phone: '8086520327',
//         password: "12345"
//     }
// ])
// .then(insertedId => {
//     console.log(insertedId);
// })

