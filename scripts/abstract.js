namespace.module('bonanza.abstract', function (exports, require) {

    exports.extend({
        Board: Board
    });

    function Board(size, gemCount) {
        this.gems = [];
        this.gemCount = gemCount;
        var i, j;
        for (i = 0; i < size[0]; i++) {
            gems[i] = [];
            for (j = 0; j < size[1]; j++) {
                gems[i][j] = rand(0, gemCount);
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
