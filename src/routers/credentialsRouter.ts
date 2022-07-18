import { Router } from "express";
import { createCredential } from "../controllers/credentialController.js";
import { validateSchema } from "../middlewares/validateSchemas.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import { credentialSchema } from "../schemas/credentialsSchema.js";

const credentialsRouter = Router();

credentialsRouter.post("/post-credential", validateToken, validateSchema(credentialSchema), createCredential)

export default credentialsRouter;