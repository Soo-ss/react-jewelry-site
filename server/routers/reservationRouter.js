import express from "express";
import { postReservation } from "../controllers/reservationController";

const reservationRouter = express.Router();

reservationRouter.post("/postReservation", postReservation);

export default reservationRouter;
