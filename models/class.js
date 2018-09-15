var orm = require('../config/orm');

var Class = {
  insertOne: function(table, cols, vals, cb) {
    orm.insertOne(table, cols, vals, function(result) {
      cb(result);
    });
  },
  selectAll: function(table, cb) {
    orm.selectAll(table, function(result) {
      cb(result);
    });
  },
  findOne: function(col, table, condition, cb) {
    orm.findOne(col, table, condition, function(result) {
      cb(result);
    });
  }
};

module.exports = Class;
