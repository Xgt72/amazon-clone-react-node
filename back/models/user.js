const connection = require("../db-connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

    static fetchOneByEmail(email) {
        const sql = "SELECT * FROM user WHERE email=?";
        return connection.promise().query(sql, [email]);
    }

    static createOne(user) {
        user.password = bcrypt.hashSync(user.password, saltRounds);
        const sql = "INSERT INTO user SET ?";
        return connection.promise().query(sql, [user]);
    }

    static updateOne(id, userData) {
        let sql = "UPDATE user SET ";
        const values = Object.values(userData);
        const properties = Object.keys(userData);
        sql += properties.join("=?, ");

        sql += "=? WHERE id=?";

        if (properties.includes("password")) {
            userData.password = bcrypt.hashSync(userData.password, saltRounds);
        }
        // console.log(sql, [...values, id]);
        return connection.promise().query(sql, [...values, id]);
    }

    static deleteOne(id) {
        const sql = "DELETE FROM user WHERE id=?";
        return connection.promise().query(sql, [id]);
    }

    // static hashPassword(password) {
    //     return bcrypt.hashSync(password, saltRounds);
    // }

    static passwordIsValid(password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword);
    }
}

module.exports = User;
