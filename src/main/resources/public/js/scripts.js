
$(function(){
  $("#trainSelected").change(function() {
    // if the option is green then add green line stops..
    var trainRoute = $("#trainSelected").val();
    if(trainRoute === "Green Line to City Center/PSU") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option val="13132">Clackamas Town Center</option>' +
        '<option val="13135">Lents/SE Foster Rd</option>' +
        '<option val="8370">Gateway/NE 99th Ave</option>' +
        '<option val="8373">Hollywood/NE 42nd Ave</option>' +
        '<option val="8377">Rose Quarter</option>' +
        '<option val="7601">Union Station/NW 5th & Glisan</option>' +
        '<option val="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option val="7606">PSU South/SW 5th & Jackson</option>'
      );
    } else if (trainRoute === "Green Line to Clackamas") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option val="10293">PSU South/SW 6th & College</option>' +
        '<option val="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option val="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option val="8340">Rose Quarter</option>' +
        '<option val="8344">Hollywood/NE 42nd Ave</option>' +
        '<option val="8347">Gateway/NE 99th Ave</option>' +
        '<option val="13128">Lents/SE Foster Rd</option>' +
        '<option val="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option val="13132">Clackamas Town Center</option>'
      );
    }
  });
  $("#trainStopSelected").change(function() {
    $(this).parent('form').submit();
    var trainStop = $('#trainStopSelected').find(":selected").val();
    // var trainStop = "13132";
    $.ajax({
      type: "GET",
      url: "https://developer.trimet.org/ws/v2/arrivals?locIDs=" + trainStop + "&xml=true&appID=3B5160342487A47D436E90CD9",
      dataType: "xml",
      success: processXML
    });

    function processXML(xml) {
      console.log("xml being processed");
      var trainName = $(xml).find("arrival").attr('fullSign');
      localStorage.setItem("trainName", trainName);
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

    }
  });
  $("#trainName").text(localStorage.getItem("trainName"));
  console.log(localStorage.getItem("trainName"));
  $(".userReports").slideDown();
});
