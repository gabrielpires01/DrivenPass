import { Router } from "express";
import { createCredential, deleteCredential, getAllCredential, getOneCredential } from "../controllers/credentialController.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import { credentialSchema } from "../schemas/credentialsSchema.js";

const credentialsRouter = Router();

credentialsRouter.post("/post-credential", validateToken, validateSchema(credentialSchema), createCredential)
credentialsRouter.get("/credentials/:id", validateToken, getOneCredential)
credentialsRouter.get("/credentials", validateToken, getAllCredential)
credentialsRouter.delete("/credentials/:id", validateToken, deleteCredential)

export default credentialsRouter;