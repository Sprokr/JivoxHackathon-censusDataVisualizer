//Current Studying Data
var JsonObject = '';
$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:8080/getCurrentStudyingData",
        data: JSON.stringify({"stateCode": 0}),//JSON.stringify(st),
        cache: false,
        headers: {
            'Content-Type': "application/json"
        },
        success: function (response) {
            JsonObject = response;
            drawStudents();
        }
    });
});

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawStudents);
function drawStudents() {
    var data = new google.visualization.DataTable();
    data.addColumn("string","AgeGroup");
    data.addColumn("number", "Count");
    var allRows = [];
    for (var i =0; i < JsonObject.result.length; i++){
        var nextRow = [];
        nextRow.push(JsonObject.result[i].ageGroup);
        nextRow.push(JsonObject.result[i].count);
        allRows.push(nextRow);
    }
    data.addRows(allRows);
    var options = {
      title: 'Student Data'
    };
    var chart = new google.visualization.PieChart(document.getElementById('edu_chart'));
    chart.draw(data, options);
}

//Literacy Data
var JsonObject1 = '';
$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:8080/getLiteracyData",
        data: JSON.stringify({"stateCode": 0}),//JSON.stringify(st),
        cache: false,
        headers: {
            'Content-Type': "application/json"
        },
        success: function (response) {
            JsonObject1 = response;
            drawLiteracy();
        }
    });
});

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawLiteracy);
function drawLiteracy() {
    var data = new google.visualization.DataTable();
    data.addColumn("string","AgeGroup");
    data.addColumn("number", "Count");
    var allRows = [];

    for (var i =0; i < JsonObject1.result.length; i++){
        var nextRow = [];
        nextRow.push(JsonObject1.result[i].ageGroup);
        nextRow.push(JsonObject1.result[i].count);
        allRows.push(nextRow);
    }
    data.addRows(allRows);
    var options = {
      title: 'Literacy Data'
    };

    var chart = new google.visualization.PieChart(document.getElementById('inc_chart'));

    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Age', 'Weight'],
  [ 8,      12],
  [ 4,      5.5],
  [ 11,     14],
  [ 4,      5],
  [ 3,      3.5],
  [ 6.5,    7]
]);

var options = {
  title: 'Age vs. Weight comparison',
  hAxis: {title: 'Age', minValue: 0, maxValue: 15},
  vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
  legend: 'none'
};

var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

chart.draw(data, options);
}