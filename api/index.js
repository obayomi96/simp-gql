const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const userModel = require('./db/db.json')
// const commentModel = require('./db.json')

module.exports = {
  models: {
    User: userModel(db)
  },
  db
}
