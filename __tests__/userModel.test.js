const userMD = require("../models/userModel")
const db = require("../data/db-configs")

beforeEach(async () => {
    await db("users").truncate()
})

describe("userModel", () => {
    describe("add function", () => {
        it("adds", async () => {

            
            let records = await db("users")
            expect(records).toHaveLength(0)
            await userMD.add({ name: 'Broman' })
            records = await db("users")
            expect(records).toHaveLength(1)
        })
    })
    describe("remove function", () => {
        it("removes", async () => {
            let records = await db("users")
            expect(records).toHaveLength(0)
            await db("users").insert({ name: 'bba' })
            records = await db("users")
            expect(records).toHaveLength(1)
            await userMD.remove(1)
            records = await db("users")
            expect(records).toHaveLength(0)
        })
    })
    describe("getAll function", () => {
        it("displays all users", async () => {
            let records = await db("users")
            expect(records).toHaveLength(0)
            await db("users").insert({ name: 'solidmike' })
            records = await db("users")
            expect(records).toHaveLength(1)
            expect(await userMD.getAll()).toEqual([{ id: 1, name: 'solidmike' }])
            await db("users").insert({ name: 'tugolri' })
            records = await db("users")
            expect(records).toHaveLength(2)
            expect(await userMD.getAll()).toEqual([{ id: 1, name: 'solidmike' }, { id: 2, name: 'tugolri' }])
        })
    })
})