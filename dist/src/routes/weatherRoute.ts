import express from "express";
import { validateCityName } from "../middleware/validators.js";
import { getWeatherData } from "../controllers/weatherController.js";
const router = express.Router();

router.get("/:city", validateCityName, getWeatherData);
export default router;
