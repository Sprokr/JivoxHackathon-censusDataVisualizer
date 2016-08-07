google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
            ['2004/05', 165, 938, 522, 998, 450, 614.6, 165, 938, 522, 998, 450, 614.6],
            ['2005/06', 135, 1120, 599, 1268, 288, 682, 165, 938, 522, 998, 450, 614.6],
            ['2006/07', 157, 1167, 587, 807, 397, 623, 165, 938, 522, 998, 450, 614.6],
            ['2007/08', 139, 1110, 615, 968, 215, 609.4, 165, 938, 522, 998, 450, 614.6],
            ['2008/09', 136, 691, 629, 1026, 366, 569.6, 165, 938, 522, 998, 450, 614.6]
        ]);

        var options = {
            title: 'Monthly Coffee Production by Country',
            vAxis: {title: 'Cups'},
            hAxis: {title: 'Month'},
            seriesType: 'bars',
            series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('edu_chart'));
        chart.draw(data, options);
    }

    //  google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawIncChart);
    function drawIncChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var options = {
            title: 'My Daily Activities',
            pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('inc_chart'));
        chart.draw(data, options);
    }

    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

        var data = google.visualization.arrayToDataTable([
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000]
        ]);

        var options = {
            title: 'Correlation between life expectancy, fertility rate ' +
            'and population of some world countries (2010)',
            hAxis: {title: 'Life Expectancy'},
            vAxis: {title: 'Fertility Rate'},
            bubble: {textStyle: {fontSize: 20}}


            var chart = new google.visualization.BubbleChart(document.getElementById('nut_chart'));
        chart.draw(data, options);
    }