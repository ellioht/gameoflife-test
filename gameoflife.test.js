import { testStatus } from "./gameoflife";

const gameOfLifeArray = [
    {
        // 1. live cell fewer than 2 dies 
        cell: {status: 1},
        neighbors: [
            {status: 1},
            {status: 0},
            {status: 0},
            {status: 0},
            {status: 0},
        ]
    },
    {
        // 2. live cell 2 or 3 live neighbours lives 
        cell: {status: 1},
        neighbors: [
            {status: 1},
            {status: 1},
            {status: 1},
            {status: 0},
            {status: 0},
        ]
    },
    {
        // 3. live cell more than 3 live neighbours dies
        cell: {status: 1},
        neighbors: [
            {status: 1},
            {status: 1},
            {status: 1},
            {status: 1},
            {status: 0},
        ]
    },
    {
        // 4. dead cell exactly 3 live neighbours becomes alive
        cell: {status: 0},
        neighbors: [
            {status: 1},
            {status: 1},
            {status: 1},
            {status: 0},
            {status: 0},
        ]
    }
]

// "Any live cell with fewer than two live neighbours dies, as if by underpopulation."
// 1. live cell fewer than 2 dies [PASSED]
describe("gameoflife function", () => {
    it("should pass if cell status 1 (live cell) and neighbors is less than 2", () => {
        const result = testStatus(gameOfLifeArray[0])
        expect(result).toBe(0)
    })
})

// "Any live cell with two or three live neighbours lives on to the next generation."
// 2. live cell 2 or 3 live neighbours lives
describe("gameoflife function", () => {
    it("should pass if cell status 1 (live cell) and either 2 or 3 neighbors", () => {
        const result = testStatus(gameOfLifeArray[1])
        expect(result).toBe(1)
    })
})

// "Any live cell with more than three live neighbours dies, as if by overpopulation."
// 3. live cell more than 3 live neighbours dies
describe("gameoflife function", () => {
    it("should pass if cell status 1 (live cell) more than 3 neighbors", () => {
        const result = testStatus(gameOfLifeArray[2])
        expect(result).toBe(0)
    })
})

// "Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."
// 4. dead cell exactly 3 live neighbours becomes alive
describe("gameoflife function", () => {
    it("should pass if cell status 0 (dead cell) and exactly 3 neighbors", () => {
        const result = testStatus(gameOfLifeArray[3])
        expect(result).toBe(2)
    })
})
