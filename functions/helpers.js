const moment = require('moment');

/**
 * Returns a range of numbers 
 */
exports.rangeOfNumbers = function(start,end){
   return Array(end - start + 1).fill().map((val,id) => id + start);
};

/**
 * Returns a range of dates between the given start and end
 * and formatted using the given format
 */
exports.rangeOfDates = function(start,end,format){

    const result = [];
    for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {
        result.push(moment(day).format(format));
    }
    return result;

}