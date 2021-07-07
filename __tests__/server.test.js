const server = require("../server")
const request = require("supertest")

describe("server.js", () => {
    describe("[GET] /", () => {
        it("runs properly", () => {
            return request(server).get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('Content-Length', '12')
            .expect({ api: "up" })
        })
    })
})

describe("userRouter.js", () => {
    describe("[GET] /", () => {
        it("runs properly", () => {
            return request(server).get('/api/users')
            .expect(200)
            .expect('Content-Type', /json/)
        })
        
    })
})