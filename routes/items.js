import { Router } from "express";
import httpItems from "../controllers/items.js";

const router = Router();

router.post('/', [
], httpItems.postInsertar); 

router.get('/',[
], httpItems.getListarTodos);       

export default router;