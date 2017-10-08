// utility class for chart cimponents 

export const chartColors: Array<any> = [
    { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
];


/**
 * Build Options object for line chart components
 * 
 * @param isResponsive 
 * @param showLines 
 * @param showLegends 
 * @param showXLabels 
 */
export const lineChartOptions = (isResponsive = false, showLines = true, showLegends = false, showXLabels) => {
    return {
        responsive: isResponsive,
        legend: {
            display: showLegends
        },
        scales: {
            xAxes: [{
                id: 'axis1',
                position: 'top',
                gridLines: {
                    display: showLines,
                    offsetGridLines: true

                },
                ticks: {
                    display: showXLabels
                }
            }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: showLines,
                        offsetGridLines: true

                    }
                }
            ]
        }

    }
};

