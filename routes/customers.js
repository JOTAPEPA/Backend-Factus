import Router from "express";
import httpCustomer from "../controllers/customers.js"

const router = Router();
router.post('/', [
], httpCustomer.postInsertar);