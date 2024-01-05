// import  Express  from "express";
// import{
//     addColumn,
//     createUser,
//     deleteUser,
//     getOneUser,
//     getUsers,
//     updateUser
 
// } from '../controller/user.js'


// const user = Express.Router();
// user.route('/').get(getUsers).post
// (createUser);
// user.route('/user').get(getOneUser).delete
// (deleteUser).put(updateUser);
// user.route('/addColumn').put(addColumn);

// export {user};


import express from "express";
 
import { getUsers, createUser, getOneUsers, deleteUser, updateUser } from "../controller/user.js";
 
const user = express.Router()
 
user.route('/').get(getUsers).post(createUser)
user.route('/user').get(getOneUsers).delete(deleteUser).put(updateUser)
 
export { user }