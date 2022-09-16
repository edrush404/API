import { Request, Response } from "express";

const CarController = {

async index(req:Request, res:Response): Promise<Response>{

    let cars = {}
    return res.json(cars)
}







}
export default CarController
