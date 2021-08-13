/**
 * we can interact with mongoose in threee diffirent ways:
 * [v] Callback
 * [x] Promises
 * [x] Async/await (Promises)
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const User = require('../models/User') 

// const index = (req, res, next) => {
//   // Callback way
//   User.find({}, (err, users) => {
//     if (err) next (err)
//     return res.status(200).json({users})
//   })
  
// }
const index = (req, res, next) => {
  // Promises way
  User.find({}).then(users => {
    return res.status(200).json({users})
  }).catch(err => next(err))
}
// const newUser = (req, res, next) => {
//   console.log('req.body content', req.body)
//   // create object model
//   const newUser = new User(req.body)
//   console.log('new user', newUser)
//   newUser.save((err, user) => {
//     console.error('Error', err)
//     console.log('user saved', user)
//     return res.status(201).json({user})
//   })
// }
const newUser = (req, res, next) => {
  console.log('req.body content', req.body)
  // create object model
  const newUser = new User(req.body)
  console.log('new user', newUser)
  newUser.save().then(user => {
    return res.status(201).json({user})
  }).catch(err => next(err))
}
module.exports = {
  index,
  newUser
}