var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        arr[i][j] = document.getElementById(i * 9 + j);
    }
}

var board = [[], [], [], [], [], [], [], [], []];

function FillBoard(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] != 0) {
                arr[i][j].innerText = board[i][j];
            } else {
                arr[i][j].innerText = '';
            }
        }
    }
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');

GetPuzzle.onclick = function () {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {
        var response = JSON.parse(xhrRequest.response);
        console.log(response);
        board = response.board;
        FillBoard(board);
    };
    xhrRequest.onerror = function () {
        console.error("Request failed");
    };
    xhrRequest.open('get', 'https://sugoku.onrender.com/board?difficulty=easy');
    xhrRequest.send();
};

SolvePuzzle.onclick = () => {
    SudokuSolver(board, 0, 0, 9);
};

function isValid(board, i, j, num, n) {
    let m = Math.floor(i / 3) * 3, t = Math.floor(j / 3) * 3;
    for (let x = 0; x < n; x++) {
        if (board[i][x] == num || board[x][j] == num) {
            return false;
        }
        if (board[m + Math.floor(x / 3)][t + (x % 3)] == num) {
            return false;
        }
    }
    return true;
}

function SudokuSolver(board, i, j, n) {
    if (i == n) {
        FillBoard(board);
        return true;
    }
    if (j == n) {
        return SudokuSolver(board, i + 1, 0, n);
    }
    if (board[i][j] != 0) {
        return SudokuSolver(board, i, j + 1, n);
    }
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, i, j, num, n)) {
            board[i][j] = num;
            let subAns = SudokuSolver(board, i, j + 1, n);
            if (subAns) {
                return true;
            }
            board[i][j] = 0; // Backtracking
        }
    }
    return false;
}

