const jwt = require("jsonwebtoken");

const {User} = require("../models/user");

const {createError} = require("../helpers");
/*
1. Извлечь из заголовка Authorization значение.
2. Разделить полученную строку на 2 слова.
3. Проверить что 1 слово - это "Bearer".
3.1. Если нет - вернуть ответ с 401 ошибкой. 
4. Проверить что токен выдавали мы (сделать валидацию токена).
4.1. Если валидация не пройдена - вернуть ответ с 401 ошибкой.
5. Найти в базе пользователя с id, закодированном в токене.
5.1. Если такого нет - вернуть ответ с 401 ошибкой.
6. Дописать в объект запроса (req) свойство user и передать
обработку дальше
*/

const {SECRET_KEY} = process.env;

const auth = async (req, res, next)=> {
    try {
        const {authorization = ""} = req.headers;
        const [bearer, token] = authorization.split(" ");
        if(bearer !== "Bearer"){
            throw createError(401);
        }
        try {
            const {id} = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if(!user || !user.token) {
                throw createError(401);
            }
            req.user = user;
            next();
        } catch (error) {
            throw createError(401);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = auth;