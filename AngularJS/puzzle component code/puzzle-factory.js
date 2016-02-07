(function () {

    angular.module('etGame.common')

        .factory('PuzzleFactory', function () {
            var puzzle = [
                {
                    row: [
                        {id: 0, deg: 180},
                        {id: 1, deg: 90}
                    ]
                },
                {
                    row: [
                        {id: 3, deg: 180},
                        {id: 2, deg: 90}
                    ]
                }
            ];
            return {
                getPieces: function () {
                    return puzzle;
                }
            }
        });
})();