
const moment = require('moment');
const helpers = require('./helpers');
const format = "DD/MM/YYYY";



exports.measurements = function (startDate, endDate) {

    // in production code we should control the startDate and endDate values 
    // in case of invalid values the response should contains more details to 
    // inform the client that the given params are invalid 
    const result = {};
    const rangeOfDates = helpers.rangeOfDates(startDate, endDate, format);
    if (startDate && endDate && moment(startDate, format).isValid() && moment(endDate, format).isValid()) {
        let start = moment(startDate)
        let end = moment(endDate);

        result.weight = weightMeasurements(start, end);
        result.temperature = temperatureMeasurements(start, end);
        result.pain = paintMeasurements(start, end);
        result.medication = medicationtMeasurements(start, end);
        result.symptoms = symptomsMeasurements(start,end);
        result.diarrhea = diarrheaMeasurements(start,end);

    }


    /**
     * Generate weight measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function weightMeasurements(start, end) {
        const random = helpers.rangeOfNumbers(55, 70);
        const result = {
            "data": {},
            "status": {
                message: "Critical weight loss of > 5%"
            }
        }
        rangeOfDates.forEach(day => result.data[day] = random[Math.floor(Math.random() * random.length)]);
        return result;
    }

    /**
     * Generate temperature measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function temperatureMeasurements(start, end) {
        const random = helpers.rangeOfNumbers(36, 40);
        const result = {
            "data": {},
            "status": {
                message: "Slight fever at > 38"
            }
        }
        rangeOfDates.forEach(day => result.data[day] = random[Math.floor(Math.random() * random.length)]);
        return result;
    }



    /**
     * Generate pain measurements
     * 
     * @param {any} start 
     * @param {any} end 
     * @returns 
     */
    function paintMeasurements(start, end) {
        const random = helpers.rangeOfNumbers(1, 10);
        const result = {
            "data": {},
            "status": {
                message: "Temporairly strong pain"
            }
        }
        rangeOfDates.forEach(day => result.data[day] = random[Math.floor(Math.random() * random.length)]);
        return result;
    }


    /**
    * Generate pain measurements
    * 
    * @param {any} start 
    * @param {any} end 
    * @returns 
    */
    function medicationtMeasurements(start, end) {
        const result = {
            "data": {},
            "status": {
                message: "100% medication compliance"
            }
        }
        rangeOfDates.forEach(day => result.data[day] = [true, false][Math.round(Math.random())]);
        
        return result;
    }

    /**
 * Generate pain measurements
 * 
 * @param {any} start 
 * @param {any} end 
 * @returns 
 */
    function symptomsMeasurements(start, end) {
        const result = {
            "data": {},
            "status": {
                message: "Relatively few uncritical symptoms noted"
            }
        }
        rangeOfDates.forEach(day => result.data[day] = [true, false][Math.round(Math.random())]);        

        return result;
    }

    function diarrheaMeasurements(start, end) {
        const randomDiarrhea = helpers.rangeOfNumbers(4, 7);
        const result = {
            "data": {},
            "status": {
                message: "Some Diarrhea noted ( 5 - 7)"
            }
        }
        for (let day = moment(start); day.diff(end, 'days') <= 0; day.add(1, 'days')) {

            result.data[moment(day).format(format)] = randomDiarrhea[Math.floor(Math.random() * randomDiarrhea.length)];
        }
        return result;
    }

    return result;
}