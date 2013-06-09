namespace.module('bonanza.models', function (exports, require) {

    exports.extend({
        Board: Board
    });

    function Board(size, gemCount) {
        this.gems = [];
        this.gemCount = gemCount;
        this.size = [size[0], size[1]];
        var i, j;
        for (i = 0; i < size[0]; i++) {
            this.gems[i] = [];
            for (j = 0; j < size[1]; j++) {
                this.gems[i][j] = rand(0, this.gemCount);
            }
        }
        for (var i = 0; i < size[1]; i++) { this.gems[i] = new Array(size[1]); }

    }

    Board.prototype.checkMatches = function () {
        var i, j;
        for (i = 0; i < this.gems.length; i++) {
            for (j = 0; j < this.gems[0].length; j++) {
                
            }
        }

        // if no matches, return undefined
        // if there are matches, return an array of matches, each match is a list of coordinates of poppable gems
    }

    Board.prototype.adjacents = function (coord) {
        var moves = [];
        if (coord[0] > 0) {
            moves[moves.length - 1] = [coord[0] - 1, coord[1]];
        }
        if (coord[0] < this.size[0] - 1) {
            moves[moves.length - 1] = [coord[0] + 1, coord[1]];
        }
        if (coord[1] > 0) {
            moves[moves.length - 1] = [coord[0], coord[1] - 1];
        }
        if (coord[1] < this.size[1] - 1) {
            moves[moves.length - 1] = [coord[0], coord[1] + 1];
        }
        return moves;
    }


    function rand(min, max) {
        // returns random integer i where: min <= i < max
        if (min == max) { return min; }
        if (min > max) {
            throw "Rand called with min greater than max"
            return;
        }

        return Math.floor(Math.random() * (max - min) + min);
    }

    function testRand() {
        var min = 0;
        var max = 5;
        var testCount = 10000;
        var i;
        var arr = [];
        for (i = min; i < max; i++) { arr[i] = 0; }
        for (i = 0; i < testCount; i++) {
            arr[rand(min, max)] += 1;
        }
        console.log(arr);
    }
});
