(function () {
//||
    angular.module('etGame.common')

        .component('puzzle', {
            templateUrl: 'common/puzzle/puzzle.html',
            controller: function (PuzzleFactory) {
                var ctrl = this;
                ctrl.puzzle = PuzzleFactory.getPieces();
                ctrl.rotatePic = function (piece) {
                    piece.deg += 90;
                    if (piece.deg === 360)piece.deg = 0;
                    var zeroCount = 0;
                    var rowsCount = 0;
                    ctrl.puzzle.forEach(function (rows) {
                        rowsCount++;
                        var notZeroDeg = rows.row.filter(function (piece) {
                            return piece.deg !== 0;
                        });
                        if (notZeroDeg.length === 0) zeroCount++;
                    });
                    if (zeroCount === rowsCount) alert('puzzle is done');
                }
            }
        })
})();
