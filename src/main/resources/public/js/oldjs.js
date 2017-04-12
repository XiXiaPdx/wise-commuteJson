// var url = location.href;
// if(url.includes("reports")) {
//   $.ajax({
//     type: "GET",
//     url: "https://developer.trimet.org/ws/v2/vehicles?onRouteOnly=true&xml=true&appID=3B5160342487A47D436E90CD9",
//     dataType: "xml",
//     success: processXML
//   });
//   function processXML(xml) {
//     $(xml).find("vehicle").each(function() {
//       var type = $(this).attr('type');
//       if(type === "rail") {
//         $('select#trainSelected').append('<option val="' + $(this).attr('vehicleID') + '">' + $(this).attr('signMessage') + '</option>');
//       }
//     });
// //   }
// }


// $("#trainStopSelected").change(function() {
//   var stopId = $("#stopId").val();
//   $.ajax({
//     type: "GET",
//     url: "https://developer.trimet.org/ws/V1/arrivals?locIDs=" + stopId + "&appID=3B5160342487A47D436E90CD9",
//     dataType: "xml",
//     success: processXML
//   });
//
//   function processXML(xml) {
//    // var scheduledTime = $(xml).find("arrival").attr('scheduled');
//    // var estimatedTime = $(xml).find("arrival").attr('estimated');
//     var trainName = $(xml).find("arrival").attr('fullSign');
//     var scheduledTime = parseInt($(xml).find("arrival").attr('scheduled'));
//     var estimatedTime = parseInt($(xml).find("arrival").attr('estimated'));
//     var delay;
//     if(scheduledTime > estimatedTime) {
//       delay = ((scheduledTime - estimatedTime) / 1000 / 60);
//     } else {
//       delay = ((estimatedTime - scheduledTime) / 1000 / 60);
//     }
//
//     var scheduledDate = new Date(0);
//     scheduledDate.setUTCMilliseconds(scheduledTime);
//
//     $("#scheduled-time").text(scheduledDate.toLocaleTimeString());
//     $("#trainName").text(trainName);
//     $("#delay").text(delay);
//   }
// });


// var scheduledTime = parseInt($(xml).find("arrival").attr('scheduled'));
// var estimatedTime = parseInt($(xml).find("arrival").attr('estimated'));
// var delay;
// if(scheduledTime > estimatedTime) {
//   delay = ((scheduledTime - estimatedTime) / 1000 / 60);
// } else {
//   delay = ((estimatedTime - scheduledTime) / 1000 / 60);
// }
//
// var scheduledDate = new Date(0);
// scheduledDate.setUTCMilliseconds(scheduledTime);
// $("#scheduled-time").text(scheduledDate.toLocaleTimeString());
// $("#trainName").text(trainName);
// $("#delay").text(delay);
//
// $("#train1").append(trainName);
