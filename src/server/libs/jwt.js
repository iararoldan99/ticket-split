import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign({payload}, process.env.JWT_SECRET, {expiresIn: 3600},
      (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    })
  }
)
}

