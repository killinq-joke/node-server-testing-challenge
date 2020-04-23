const request = require("supertest")
const db = require("../data/dbConfig")
const server = require("./server")

beforeEach(async () => {
    await db("characters").truncate()
})

describe("characters", () => {
    describe("POST /api/characters", () => {
      it("return status 201 SUCCESS", async () => {
        await request(server)
          .post("/api/characters").send({name: "zak", age: "19"})
          .then((res) => {
            expect(res.status).toBe(201);
          });
      });
      it("returns 'character added'", async () => {
        await request(server)
          .post("/api/characters").send({name: "zak", age: "33"})
          .then((res) => {
            expect(res.body.message).toBe("character added");
          });
      });
      it("adds a character to the db", async() => {
          let character = {name: "thing", age: "12"}
          let {name} = character
          await request(server)
            .post("/api/characters")
            .send(character)
            .then(async () => {
              expect(await db("characters").where({ name })).toHaveLength(1);
            });
      })
    });
    describe("GET /api/characters", () => {
        it("return status 200 OK", async () => {
            await request(server).get("/api/characters").then(res => {
                expect(res.status).toBe(200)
            })
        })
        it("return every characters", async () => {
            await db("characters").insert({name: "zak", age: "22"})
            await db("characters").insert({ name: "jack", age: "87" });
            await db("characters").insert({ name: "toast", age: "123" });
          await request(server)
            .get("/api/characters")
            .then((res) => {
              expect(res.body.characters).toHaveLength(3);
            });
        });
    });
    describe("DELETE /api/characters/:id", () => {
      it("return status 200 OK", async () => {
        await request(server)
          .delete("/api/characters/1")
          .then((res) => {
            expect(res.status).toBe(200);
          });
      });
      it("returns 'character deleted'", async () => {
        await request(server)
          .delete("/api/characters/1")
          .then((res) => {
            expect(res.body.message).toBe("character deleted");
          });
      });
      it("deletes the selected character", async () => {
        await db("characters").insert({name: "zak", age: "44"})
        expect(await db("characters")).toHaveLength(1);
        await request(server)
          .delete("/api/characters/1")
          .then(async () => {
            expect(await db("characters")).toHaveLength(0);
          });
      });
    });
    
})