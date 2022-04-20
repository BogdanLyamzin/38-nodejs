const fs = require("fs/promises");
// const fs = require("fs").promises;

// fs.readFile("files/name.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const fileOperation = async () => {
    try {
        // const text = await fs.readFile("files/file.txt", "utf-8");
        // console.log(text);
        // const result = await fs.readFile("files/file.txt");
        // const text = result.toString();
        // console.log(text);
        // await fs.appendFile("files/file.txt", "\nЧапаев и Пустота");
        // console.log(text);
        // await fs.writeFile("files/file.txt", "Так говорил Заратустра")
        // await fs.appendFile("files/file2.txt", "Чапаев и Пустота");
        // await fs.writeFile("files/file3.txt", "Так говорил Заратустра")
    } catch (error) {
        console.log(error.message);
    }
};
fileOperation()




