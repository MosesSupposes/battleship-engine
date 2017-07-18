var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
    describe('checkGameStatus', function () {
        var checkGameStatus = require('../game_logic/gameInstance.js').checkGameStatus;
        it('should tell me when the game is over', function () {
        var players = [
            {
                ships: [
                    {
                        locations: [[0, 0]],
                        damage: [[0, 0]]
                    }
                ]
            }
        ];
        var actual = checkGameStatus(players);
        expect(actual).to.be.false;
        });
    });

    describe('takeTurn', function() {
        var takeTurn = require('../game_logic/gameInstance').takeTurn;
        var guess, player;

        beforeEach(function() {
            guess = () => [0, 0];
            player = {
                ships: [
                    {
                        locations: [[0, 0]], damage: []
                    }
                ]
            }
        });

        it('should return false if the game ends', function() {
            var actual = takeTurn(player, guess);
            expect(actual).to.be.false;
        });
    });

    function saveGame(cb) {
        setTimeout(function() {
            cb();
        }, 1000);
    }

    describe('saveGame', function() {
        var status = 'game not saved';
        it ('should update save status', function(done) {
            saveGame(function() {
                status = 'game saved';
                done();
                expect(status).to.equal('game saved');
            }); 
        });
    });

});