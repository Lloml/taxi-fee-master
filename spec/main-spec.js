'use strict';
const taximeter = require('../main/main')



describe('practice-3-2', function () {

   

    it("选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新A集", function () {
        var result = taximeter();

        expect(result).toEqual(6);
    });
});
