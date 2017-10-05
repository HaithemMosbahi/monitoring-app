
/**
 * Returns a range of numbers 
 */
exports.rangeOfNumbers = function(start,end){
   return Array(end - start + 1).fill().map((val,id) => id + start);
};