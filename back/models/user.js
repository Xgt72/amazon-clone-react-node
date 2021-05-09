const connection = require("../db-connection");

class User {
    constructor(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    static async fetchAll() {
        const sql = "SELECT * FROM user";
        return connection.promise().query(sql);
    }

    static fetchOneById(id) {
        const sql = "SELECT * FROM user WHERE id=?";
        return connection.promise().query(sql, [id]);
    }

    static fetchOneByEmailAndPassword(email, password) {
        const sql = "SELECT * FROM user WHERE email=? AND password=?";
        return connection.promise().query(sql, [email, password]);
    }

    static createOne(user) {
        const sql = "INSERT INTO user SET ?";
        return connection.promise().query(sql, [user]);
    }

    static updateOne(id, userData) {
        let sql = "UPDATE user SET ";
        const values = Object.values(userData);
        const properties = Object.keys(userData);
        sql += properties.join("=?, ");
        
        sql += "=? WHERE id=?";
        // console.log(sql, [...values, id]);
        return connection.promise().query(sql, [...values, id]);
    }

    static deleteOne(id) {
        const sql = "DELETE FROM user WHERE id=?";
        return connection.promise().query(sql, [id]);
    }
}

module.exports = User;
