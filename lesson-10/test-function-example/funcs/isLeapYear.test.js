/*

Как должна работать функция:
1. Получает в качестве аргумента год в виде целого числа.
2. Если год высокосный - возвращает true, если нет - false.
3. Если аргумент не подходит для расчетов - выбрасывает ошибку
с текстом, описывающим проблему. 

Высокосный год:
- делится на 4 без остатка;
- не делится на 100 без остатка;
- может делится на 400 без остатка. 

2008 => true
2003 => false
1900 => false
2000 => true

41 => error 'Year must be 42 or more'
2008.4 => error 'Year must be integer'
() => error 'Year must be exist'
"2008" => error 'Year must be number'
null => error 'Year must be number'
false => error 'Year must be number'
true => error 'Year must be number'
()=>{} => error 'Year must be number'
{} => error 'Year must be number'
[] => error 'Year must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    test("2008 => true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true); // if(result === true)
        /*
        {
            value: result,
            toBe(value){

            },
            toThrow(message) {

            }
        }
        */
    });

    test("2003 => false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    });

    test("1900 => false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    });

    it("2000 => true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    });

    test("41 => error 'Year must be 42 or more'", ()=> {
        expect(()=> isLeapYear(41)).toThrow("Year must be 42 or more");
    });

    test("2008.4 => error 'Year must be integer'", ()=> {
        expect(()=> isLeapYear(2008.4)).toThrow("Year must be integer");
    });

    test("() => error 'Year must be exist'", ()=> {
        expect(()=> isLeapYear()).toThrow("Year must be exist");
    });

    test("'2008' => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear("2008")).toThrow("Year must be number");
    });

    test("null => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear(null)).toThrow("Year must be number");
    });

    test("true => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear(true)).toThrow("Year must be number");
    });

    test("false => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear(false)).toThrow("Year must be number");
    });

    test("()=>{} => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear(()=>{})).toThrow("Year must be number");
    });

    test("{} => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear({})).toThrow("Year must be number");
    });

    test("[] => error 'Year must be number'", ()=> {
        expect(()=> isLeapYear([])).toThrow("Year must be number");
    });
})