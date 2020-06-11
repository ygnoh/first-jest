import {add, Calculator} from "../index";

it("five plus four is nine", () => {
    expect(add(5, 4)).toBe(9);
});

it("Calculator can calculate", () => {
    const cal = new Calculator();

    cal.add(3, 2);

    expect(cal.result).toBe(5);
});
