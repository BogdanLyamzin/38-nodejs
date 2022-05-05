const jwt = require("jsonwebtoken");

const SECRET_KEY = "ghccsyFfbdf";

const payload = {
    id: "627171fbe28dd4c33ffefd3d"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken =  jwt.decode(token);
// console.log(decodeToken);

try {
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzE3MWZiZTI4ZGQ0YzMzZmZlZmQzZCIsImlhdCI6MTY1MTc3MDIwMywiZXhwIjoxNjUxNzczODAzfQ.bMqGJkfFtv-4SF3GIoAQCv15GrPW7ccZS-U6t81FOzs"
    const verifyToken = jwt.verify(wrongToken, SECRET_KEY);
    console.log(verifyToken)
} catch (error) {
    console.log(error.message);
}