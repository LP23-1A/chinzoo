import { Request, Response } from "express";
import { OrderModel } from "../model/Order";
import { UserModel } from "../model/User";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, orderNumber, totalPrice, district, khoroo, apartment } =
      req.body;
    const result = await OrderModel.create({
      userId: userId,
      orderNumber: orderNumber,
      totalPrice: totalPrice,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
    });
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(500).send(error);
  }
};