/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var temp;
    var celldata;
    for (var i = 0; i < 9; i++) {
        temp = {};
        for (var j = 0; j < 9; j++) {
            celldata = board[i][j];
            if (celldata === '.') continue;
            if (celldata in temp) {
                return false;
            } else {
                temp[celldata] = 1;
            }
        }
    }
    
    for ( i = 0; i < 9; i++) {
        temp = {};
        for (j = 0; j < 9; j++) {
            celldata = board[j][i];
            if (celldata === '.') continue;
            if (celldata in temp) {
                return false;
            } else {
                temp[celldata] = 1;
            }
        }
    }
    
    for (var block = 0; block < 9; block++) {
        temp = {};
        for (i = Math.floor(block / 3)*3; i < Math.floor(block / 3)*3 + 3; i++) {
            for (j = (block % 3)*3; j < (block % 3) * 3 + 3; j++) {
                celldata = board[i][j];
                if (celldata === '.') continue;
                if (celldata in temp) {
                    return false;
                } else {
                    temp[celldata] = 1;
                }
            }
        }
    }
    
    return true;
    
    
};