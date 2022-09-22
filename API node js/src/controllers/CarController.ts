import { Request, Response } from "express";
import carModel from "../database/carModel";

const CarController = {

    async index(req: Request, res: Response): Promise<Response> {

        let cars = await carModel.find();
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        let {id} = req.params;
        let car = await carModel.findById(id)
        return res.json(car)
    },

    async create(req: Request, res: Response): Promise<Response> {

        let car = await carModel.create(req.body)
        return res.json(car)
    }


}
export default CarController
