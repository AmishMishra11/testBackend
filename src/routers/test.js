import express from "express";
import { simpleGerRequest } from "../controllers/getTest";

const router = express.Router();

router.route("/").get(simpleGerRequest);

export { router };
