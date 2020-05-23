const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// 모델 정의
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true, // delete blank
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

/*
Arrow function이 안먹힌다.
나중에 수정하자
*/

// 저장하기 전 함수 (save)
// 그리고 next()를 해서 저장시킨다.
userSchema.pre("save", function (next) {
  let user = this;

  // 비밀번호 바꿀때만 실행한다.
  // 비밀번호 바꿀때 암호화된 평문이 바뀌면 안되기때문에 이렇게 한다.
  if (user.isModified("password")) {
    // 비밀번호 암호화 (bcrypt)
    // 먼저, salt를 만든다.
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        return next(err);
      }

      // 생성이 성공했다면 hash를 생성한다.
      bcrypt.hash(user.password, salt, (err, hash) => {
        // 실패하면 next(err)
        if (err) {
          return next(err);
        }

        // 성공했다면
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 평문과 암호화된 비밀번호를 체크한다.
// 복호화 할 수는 없기 때문이다.
userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  let user = this;

  // jsonwebtoken을 이용해서 token을 생성하기
  // MongoDB에서 생성된 id(user._id)는 String이 아니므로 MongoDB의 toHexString()메서드를
  // 사용하여 다음과 같이 형변환을 해주어야 한다.
  let token = jwt.sign(user._id.toHexString(), "secretToken");

  // user._id + 'secretToken' => token이 되고
  // 'secretToken'을 넣으면 user._id가 나와야 된다.

  user.token = token;
  user.save((err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  jwt.verify(token, "secretToken", (err, decoded) => {
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인한다.
    user.findOne(
      {
        _id: decoded,
        token: token,
      },
      (err, user) => {
        if (err) {
          return cb(err);
        }
        cb(null, user);
      }
    );
  });
};

// 스키마를 모델로 감싸준다.
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
