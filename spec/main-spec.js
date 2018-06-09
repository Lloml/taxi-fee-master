'use strict';
const taximeter = require('../main/main')



describe('taxu fee', function () {

    let distance1 = 4, duration =  2;
    let distance2 = 7;
    let distance3 = 16;
    it("taxu fee", function () {
        var result = taximeter(distance1,duration);
        expect(result).toEqual(8);
    });
    it("taxu fee1", function () {
        var result = taximeter(distance2, duration);
        expect(result).toEqual(11);
    });
    it("taxu fee2", function () {
        var result = taximeter(distance3, duration);
        expect(result).toEqual(21);
    });
});
