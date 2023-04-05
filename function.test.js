const {myFun, reverseStr, Calculator, cap} = require('./function')
describe("String", ()=>{
    test("length", ()=>{
        expect(myFun("test")).toBe(4)
    })
    test ('length', () => {
        expect(() => myFun("hello welcome to the testing")).toThrow(
            Error("Doesn't match 1-10chars")
        )
    })
    
    test('reverse', ()=>{
        expect(reverseStr("test")).toBe("tset")
    })
    test('Capitalize', ()=>{
        expect(cap("captain")).toBe("Captain")
    })
})

describe("Calculator",()=>{
    test("Addition", ()=>{
        expect(Calculator.Add(1,2)).toBe(3)
    })
    test("Subtraction", ()=>{
        expect(Calculator.Subtract(1,2)).toBe(-1)
    })
    test("Mupltiply", ()=>{
        expect(Calculator.Multiply(1,2)).toBe(2)
    })
    test("Subtraction", ()=>{
        expect(Calculator.Divide(4,2)).toBe(2)
    })
})