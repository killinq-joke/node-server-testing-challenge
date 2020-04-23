const request = require("supertest")
const db = require("../data/dbConfig")
const server = require("./server")

describe("characters", () => {
    describe("GET /api/characters", () => {
        it("return status 200 OK", async () => {
            await request(server).get("/api/characters").then(res => {
                expect(res.status).toBe(200)
            })
        })
        it("return status 200 OK", async () => {
          await request(server)
            .get("/api/characters")
            .then((res) => {
              expect(res.status).toBe(200);
            });
        });
    });
})