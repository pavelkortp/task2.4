import {Request, Response} from "express";
import express from "express";
import {createItem, deleteItem, editItem, getItems} from "../handlers/items-handler";

export const itemsRouter = express.Router();
itemsRouter
    .route('')
    .get(async (req: Request, res: Response) => await getItems(req, res))
    .post(async (req: Request, res: Response) => await createItem(req, res))
    .put(async (req: Request, res: Response) => await editItem(req, res))
    .delete(async (req: Request, res: Response) => await deleteItem(req, res));
