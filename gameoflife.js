

function testStatus(cell) {

    const aliveNeighborsCount = cell.neighbors.filter(neighbor => neighbor.status === 1).length;

    // 1. live cell fewer than 2 dies
    if (cell.cell.status === 1 && aliveNeighborsCount < 2) {
        return 0;
    }

    // 2. live cell 2 or 3 live neighbours lives
    if ((cell.cell.status === 1 && aliveNeighborsCount === 2) || (cell.cell.status === 1 && aliveNeighborsCount === 3)) {
        return 1;
    }

    // 3. live cell more than 3 live neighbours dies
    if (cell.cell.status === 1 && aliveNeighborsCount > 3) {
        return 0;
    }

    // 4. dead cell exactly 3 live neighbours becomes alive
    if (cell.cell.status === 0 && aliveNeighborsCount === 3) {
        return 2;
    }
}

export {
    testStatus
}