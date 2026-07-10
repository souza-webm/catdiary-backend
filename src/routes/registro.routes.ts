import { RegistroController } from "../controller/registro.controller";
import { Router } from "express";

const router = Router();
const registroController = new RegistroController();

router.post('/',registroController.create);
router.delete('/:id',registroController.delete);
router.get('/',registroController.findAll);
router.get('/:id',registroController.findById);
router.put('/:id',registroController.update);

export {router as registroRoutes};