
const moment = require('moment');
const helpers = require('./helpers');
const format = "DD/MM/YYYY";



exports.measurements = function (startDate, endDate) {

    // in production code we should control the startDate and endDate values 
    // in case of invalid values the response should contains more details to 
    // inform the client that the given params are invalid 
    const result = {};
    if (startDate && endDate && moment(startDate,format).isValid() && moment(endDate,format).isValid()) {
        let start = moment(startDate)
        let end = moment(endDate);

        result.weight =weightMeasurements(start,end);
        result.temperature = temperatureMeasurements(start,end);
        result.pain = paintMeasurements(start,end);
        result.medication = {};
    }
            

    /**
     * Generate weight measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function weightMeasurements(start,end){
        const random = helpers.rangeOfNumbers(55,70);
        const result = {
            "data":{},
            "status":{}
        }
        for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {
            
            result.data[moment(day).format(format)] = random[Math.floor(Math.random() * random.length)];
        }
        return result;
    }

    /**
     * Generate temperature measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function temperatureMeasurements(start,end){
        const random = helpers.rangeOfNumbers(36,40);
        const result = {
            "data":{},
            "status":{}
        }
        for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {
            
            result.data[moment(day).format(format)] = random[Math.floor(Math.random() * random.length)];
        }
        return result;
    }



    /**
     * Generate pain measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function paintMeasurements(start,end){
        const random = helpers.rangeOfNumbers(1,10);
        const result = {
            "data":{},
            "status":{}
        }
        for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {
            
            result.data[moment(day).format(format)] = random[Math.floor(Math.random() * random.length)];
        }
        return result;
    }

    return result;
}