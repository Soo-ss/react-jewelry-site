import { User } from "../models/User";

export const postRegister = (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.
  const user = new User(req.body);

  // save하기전, model에 있는 pre함수가 먼저 수행되고 save가 수행된다.
  user.save((err, userInfo) => {
    if (err) {
      return res.json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
    });
  });
};

export const postLogin = (req, res) => {
  // 요청된 이메일을 DB에서 찾는다.
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 유저가 없습니다.",
        });
      }

      // else
      // 있다면
      // 요청된 이메일이 DB에 있다면 비번이 맞는 비번인지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다.",
          });
        }

        // else
        // 비밀번호까지 맞다면 토큰을 생성하기
        user.generateToken((err, user) => {
          if (err) {
            return res.status(400).send(err);
          }

          // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지 등등..
          // 어디에다 저장해야 안전한지는 논란이 많다고 한다.
          // 우리는 쿠키에다가 저장한다.
          res.cookie("x_auth", user.token).status(200).json({
            loginSuccess: true,
            userId: user._id,
          });
        });
      });
    }
  );
};

// role 1 admin
// role 2 특정 부서 admin 이렇게도 가능하다.

// middleware auth
// 순서대로 수행된다.
export const getAuth = (req, res) => {
  // 여기까지 미들웨어를 통과 해 왔다는 말은 Authentication이 true라는 뜻이다.
  // console.log("=====getAuth=====\n", req.user);
  res.status(200).json({
    // 원하는 정보만 선택해서 저장 가능하다.
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true, // role 0 => 일반유저이고 role이 0이 아니면 관리자이다.
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    reviews: req.user.reviews,
  });
};

export const getLogout = (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      token: "",
    },
    (err, user) => {
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
