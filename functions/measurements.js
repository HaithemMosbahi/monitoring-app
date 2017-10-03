
const moment = require('moment');
const format = "MM/DD/YYYY"

exports.measurements = function (startDate, endDate) {

    // in production code we should control the startDate and endDate values 
    // in case of invalid values the response should contains more details to 
    // inform the client that the given params are invalid 
    const result = {};
    if (startDate && endDate && moment(startDate).isValid() && moment(endDate).isValid()) {
        let start = moment(startDate)
        let end = moment(endDate);
        // iterate over the range of dates
        for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {
            result[moment(day).format(format)] = `Day ${day}`;
        }
    }

    return result;
}