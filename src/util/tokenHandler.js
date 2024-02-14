import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "hiranmayee", {
        expiresIn: "30d",
    });
};

module.exports = generateToken;
