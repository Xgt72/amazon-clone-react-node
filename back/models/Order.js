const connection = require("../db-connection");

class Order {
  constructor(userId, paymentIntentId, amount, created) {
    this.userId = userId;
    this.paymentIntentId = paymentIntentId;
    this.amount = amount;
    this.created = created;
  }

  static fetchAll() {
    const sql = "SELECT * FROM orders";
    return connection.promise().query(sql);
  }

  static fetchOneById(id) {
    const sql = "SELECT * FROM orders WHERE id = ?";
    return connection.promise().query(sql, [id]);
  }

  static fetchAllByUserId(userId) {
    const sql = "SELECT * FROM orders WHERE userId = ?";
    return connection.promise().query(sql, [userId]);
  }

  static createOne(orderData) {
    const sql = "INSERT INTO orders SET ?";
    return connection.promise().query(sql, [orderData]);
  }

  static updateOne(id, orderData) {
    let sql = "UPDATE orders SET ";
    const values = Object.values(orderData);
    const properties = Object.keys(orderData);
    sql += properties.join("=?, ");
    sql += "=? WHERE id=?";
    return connection.promise().query(sql, [...values, id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM orders WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Order;
