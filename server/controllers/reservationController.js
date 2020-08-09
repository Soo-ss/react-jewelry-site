import { User } from "../models/User";

export const postReservation = (req, res) => {
  // 유저에다가 저장한다. 예약은 유저당 한개이다.
  User.findOneAndUpdate(
    {
      _id: req.body.creator,
    },
    {
      phone: req.body.phone,
      myName: req.body.name,
      weddingDate: req.body.weddingDate,
      reservationDate: req.body.reservationDate,
    },
    (err) => {
      if (err) {
        return res.json({
          success: false,
          err,
        });
      }

      return res.status(200).send({
        success: true,
      });
    }
  );
};
