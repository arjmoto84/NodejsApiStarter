/**
 * we can interact with mongoose in threee diffirent ways:
 * [v] Callback
 * [v] Promises
 * [x] Async/await (Promises)
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const User = require('../models/User') 

const index = async (req, res, next) => {
  // Async/ await way
  const users = await User.find({})
  return res.status(200).json({users}) 
  
}

const newUser = async (req, res, next) => {
  // create object model
  const newUser = new User(req.body)
  await newUser.save()
  return res.status(201).json({user: newUser})
}


module.exports = {
  index,
  newUser
}