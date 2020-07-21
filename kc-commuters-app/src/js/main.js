var nhIds = new Array();
var daData = new Array();
var dcData = new Array();
var ptData = new Array();
var wData = new Array();

function createCharts(json) {
  for(var i = 0; i < json.length; i++) {
    nhIds.push(json.features[i].properties.id);
    console.log(nhIds);
    console.log(json.features[0].properties.id);
    console.log(json.features);
    daData.push(json.features[i].properties[pop-commute-drive_alone]);
    dcData.push(json.features[i].properties[pop-commute-drive_carpool]);
    ptData.push(json.features[i].properties[pop-commute-public_transit]);
    wData.push(json.features[i].properties[pop-commute-walk]);
  }
}
createCharts(json);

  $(function () {
    $('#chart').highcharts({
  chart: {
     type: 'bar'
   },
   plotOptions: {
     series: {
       stacking: 'normal'
     }
   },
   xAxis: {
     categories: nhIds
   },
   series: [{
     name: 'Drive-Alone',
     data: daData
   },
   {
     name: 'Drive-Carpool',
     data: dcData
   },
   {
     name: 'Public-Transit',
     data: ptData
   },
   {
     name: 'Walk',
     data: wData
   }
   ]

 })
});




var json = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "https://github.com/mysidewalk/interview/blob/master/frontend-engineer/kc-neighborhoods.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
})();

var nhIds = new Array();
var daData = new Array();
var dcData = new Array();
var ptData = new Array();
var wData = new Array();

for(var i = 0; i < json.length; i++) {
  nhIds.push(json.features[i].properties.id);
  daData.push(json.features[i].properties[pop-commute-drive_alone]);
  dcData.push(json.features[i].properties[pop-commute-drive_carpool]);
  ptData.push(json.features[i].properties[pop-commute-public_transit]);
  wData.push(json.features[i].properties[pop-commute-walk]);
}

