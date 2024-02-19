import {createFood, deleteFood, getAllFood, updateFood,} from "../controller/Food";
import express from "express";

const food = express.Router();

food.route("/").get(getAllFood).post(createFood);
food.route("/:id").delete(deleteFood);
food.route("/:id").put(updateFood);

export { food };