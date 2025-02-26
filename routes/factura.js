import { Router } from "express";
import httpFactura from "../controllers/factura.js"

const router = Router();
router.post('/', [
], httpFactura.postInsertar);

router.get('/',[
], httpFactura.getListarTodos);

export default router;