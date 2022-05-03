const bcrypt = require("bcryptjs");

const password = "123456";

const hashInvoke = async(password) => {
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(password, salt);
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);
    // const compareResult = await bcrypt.compare(password, hashPassword);
    const compareResult = await bcrypt.compare("123457", hashPassword);
    console.log(compareResult);
};

hashInvoke(password)
