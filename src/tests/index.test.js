const {isProductPresent} = require("../index.js")

describe("Input handler", () => {
    test("returns true when product exists", ()=>{
        expect(isProductPresent("PL123456")).toBe(true)
    })
        test("returns false when product doesn't exists", ()=>{
            expect(isProductPresent("PL123465")).toBe(false)
        })
})

