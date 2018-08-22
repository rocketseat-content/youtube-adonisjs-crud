"use strict";

const Model = use("Model");

class Tweet extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Tweet;
