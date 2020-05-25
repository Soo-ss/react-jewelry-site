const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  phone: String,
  myName: String,
  weddingDate: Date,
  reservationDate: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = {
  Reservation,
};
