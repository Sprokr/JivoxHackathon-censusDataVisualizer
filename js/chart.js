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

//Taxable Data
var JsonObjectSc = '';
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:8080/getTaxableData",
        data: JSON.stringify({"stateCode": 0}),//JSON.stringify(st),
        cache: false,
        headers: {
            'Content-Type': "application/json"
        },
        success: function (response) {
            JsonObjectSc = response;
            drawTaxable();
        }
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
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:8080/getLiteracyData",
        data: JSON.stringify({"stateCode": 0}),
        cache: false,
        headers: {
            'Content-Type': "application/json"
        },
        success: function (response) {
            JsonObject1 = response;
            drawLiteracy();
        }
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
    var chart = new google.visualization.PieChart(document.getElementById('nut_chart'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawTaxable);
function drawTaxable() {
    var data = new google.visualization.DataTable();
    data.addColumn("number","Age");
    data.addColumn("number", "Count");
    var allRows = [];
    for (var i =0; i < JsonObjectSc.result.length; i++){
        var nextRow = [];
        nextRow.push(JsonObjectSc.result[i].age);
        nextRow.push(JsonObjectSc.result[i].count);
        allRows.push(nextRow);
    }
    data.addRows(allRows);
    var options = {
      title: 'Taxable Data'
    };
    var chart = new google.visualization.ScatterChart(document.getElementById('inc_chart'));
    chart.draw(data, options);
}

});
