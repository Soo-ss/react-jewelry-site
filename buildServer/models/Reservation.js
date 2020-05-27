"use strict";

var mongoose = require("mongoose");

var ReservationSchema = new mongoose.Schema({
  phone: String,
  myName: String,
  weddingDate: Date,
  reservationDate: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
var Reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = {
  Reservation: Reservation
};