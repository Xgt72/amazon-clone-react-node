const connection = require("../db-connection");

// class User {
//     constructor(firstname, lastname, email, password) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.password = password;
//     }

const findMany = async () => {
    const sql = "SELECT * FROM user";
    connection
        .promise()
        .query(sql)
        .then(([rows, fields]) => {
            console.log("1: ", rows);
            return rows;
        });
};
// }

module.exports = { findMany };
