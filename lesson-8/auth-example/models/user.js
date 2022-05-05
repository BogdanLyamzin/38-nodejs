const {Schema, model} = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unquire: true,
        match: emailRegexp
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        default: null
    }
}, {versionKey: false, timestamps: true});

const registerJoiSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
});

const schemas = {
    register: registerJoiSchema,
    login: registerJoiSchema
};

const User = model("user", userSchema);

module.exports = {
    User,
    schemas
}
