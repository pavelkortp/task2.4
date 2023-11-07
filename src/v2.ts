import {Request, Response} from "express";
import {app} from "./index";
import {login, logout, register} from "./auth-hendler.js";
import {createItem, deleteItem, editItem, getItems} from "./items-hendler.js";



app.post('/api/v2/router', async (req: Request, res: Response) => {
    console.log('here')
    switch (req.query.action) {
        case 'login':
            await login(req, res);
            break;
        case 'register':
            await register(req, res);
            break;
        case 'logout':
            await logout(req, res);
            break;
        case 'getItems':
            await getItems(req, res);
            break;
        case 'deleteItem':
            await deleteItem(req, res);
            break;
        case 'createItem':
            await createItem(req, res);
            break;
        case 'editItem':
            await editItem(req, res);
            break;
        default:
            res.status(400).json({'error': 'not found'});
    }
});
