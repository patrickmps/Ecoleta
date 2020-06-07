//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//Utilizar o objeto de banco de dados para as operaçõe
db.serialize(() => {
//     //Com comandos SQl eu vou:

//     //1 - Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //2 - Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }
    
//     db.run(query, values, afterInsertData)

//     //3 - Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err){
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros.")
//         console.log(rows)
//     })

    // 4 - Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
})
