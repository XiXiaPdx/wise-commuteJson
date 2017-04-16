$(function(){
  $("#trainSelected").change(function() {
    // if the option is green then add green line stops..
    var trainRoute = $("#trainSelected").val();

    if (trainRoute === "Blue to Gresham") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9848">Hatfield Government Center</option>' +
        '<option value="9838">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9831">Willow Creek/SW 185th Ave</option>' +
        '<option value="9830">Elmonica/SW 170th Ave</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="8349">E 122nd Ave</option>' +
        '<option value="8355">Ruby Junction/E 197th Ave</option>' +
        '<option value="8359">Cleveland Ave</option>'
      );
    } else if (trainRoute === "Blue to Hillsboro") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="8359">Cleveland Ave</option>' +
        '<option value="8362">Ruby Junction/E 197th Ave</option>' +
        '<option value="8368">E 122nd Ave</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>' +
        '<option value="9829">Elmonica/SW 170th Ave</option>' +
        '<option value="9833">Willow Creek/SW 185th Ave</option>' +
        '<option value="9837">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9848">Hatfield Government Center</option>'
      );
    } else if(trainRoute === "Green Line to City Ctr") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13132">Clackamas Town Center</option>' +
        '<option value="13135">Lents/SE Foster Rd</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    } else if (trainRoute === "Green Line to Clackamas") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="13128">Lents/SE Foster Rd</option>' +
        '<option value="13132">Clackamas Town Center</option>'
      );
    } else if (trainRoute === "Orange Line to Milwaukie") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="7601">Union Station/NW 5th Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>' +
        '<option value="13711">South Waterfront/SW Moody</option>' +
        '<option value="13712">OMSI/SE Water</option>' +
        '<option value="13715">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13717">SE Tacoma/Johnson Creek</option>' +
        '<option value="13718">Milwaukie/Main St</option>' +
        '<option value="13720">SE Park Ave</option>'
      );
    } else if (trainRoute === "Orange Line to City Ctr/Expo") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13720">SE Park Ave</option>' +
        '<option value="13721">Milwaukie/Main St</option>' +
        '<option value="13722">SE Tacoma/Johnson Creek</option>' +
        '<option value="13724">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13727">OMSI/SE Water</option>' +
        '<option value="13728">South Waterfront/SW Moody</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>'
      );
    } else if (trainRoute === "Red Line to Beaverton") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10579">Portland Int\'l Airport</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>'
      );
    } else if (trainRoute === "Red to Airport") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="10579">Portland Int\'l Airport</option>'
      );
    } else if (trainRoute === "Yellow Line to Expo Ctr") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="11508">Interstate/Rose Quarter</option>' +
        '<option value="11511">N Prescott St</option>' +
        '<option value="11514">N Lombard</option>' +
        '<option value="11498">Expo Center</option>'
      );
    } else if (trainRoute === "Yellow Line to City Ctr/PSU") {
      $("#trainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="11498">Expo Center</option>' +
        '<option value="11501">N Lombard Transit</option>' +
        '<option value="11504">N Prescott St</option>' +
        '<option value="11507">Interstate/Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Gilsan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    }
  });

  //Report Screen Train Stop Selector
  $("#reportTrainSelected").change(function() {
    // if the option is green then add green line stops..
    var trainRoute = $("#reportTrainSelected").val();

    if (trainRoute === "101") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9848">Hatfield Government Center</option>' +
        '<option value="9838">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9831">Willow Creek/SW 185th Ave</option>' +
        '<option value="9830">Elmonica/SW 170th Ave</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="8349">E 122nd Ave</option>' +
        '<option value="8355">Ruby Junction/E 197th Ave</option>' +
        '<option value="8359">Cleveland Ave</option>'
      );
    } else if (trainRoute === "102") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="8359">Cleveland Ave</option>' +
        '<option value="8362">Ruby Junction/E 197th Ave</option>' +
        '<option value="8368">E 122nd Ave</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>' +
        '<option value="9829">Elmonica/SW 170th Ave</option>' +
        '<option value="9833">Willow Creek/SW 185th Ave</option>' +
        '<option value="9837">Fair Complex/Hillsboro Airport</option>' +
        '<option value="9848">Hatfield Government Center</option>'
      );
    } else if(trainRoute === "201") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13132">Clackamas Town Center</option>' +
        '<option value="13135">Lents/SE Foster Rd</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    } else if (trainRoute === "202") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="13128">Lents/SE Foster Rd</option>' +
        '<option value="13132">Clackamas Town Center</option>'
      );
    } else if (trainRoute === "301") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="7601">Union Station/NW 5th Glisan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>' +
        '<option value="13711">South Waterfront/SW Moody</option>' +
        '<option value="13712">OMSI/SE Water</option>' +
        '<option value="13715">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13717">SE Tacoma/Johnson Creek</option>' +
        '<option value="13718">Milwaukie/Main St</option>' +
        '<option value="13720">SE Park Ave</option>'
      );
    } else if (trainRoute === "302") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="13720">SE Park Ave</option>' +
        '<option value="13721">Milwaukie/Main St</option>' +
        '<option value="13722">SE Tacoma/Johnson Creek</option>' +
        '<option value="13724">SE 17th Ave & Holgate Blvd</option>' +
        '<option value="13727">OMSI/SE Water</option>' +
        '<option value="13728">South Waterfront/SW Moody</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>'
      );
    } else if (trainRoute === "401") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10579">Portland Int\'l Airport</option>' +
        '<option value="8370">Gateway/NE 99th Ave</option>' +
        '<option value="8373">Hollywood/NE 42nd Ave</option>' +
        '<option value="8377">Rose Quarter</option>' +
        '<option value="8383">Pioneer Square North</option>' +
        '<option value="9757">Providence Park</option>' +
        '<option value="10121">Washington Park</option>' +
        '<option value="9624">Sunset Transit Center</option>' +
        '<option value="9818">Beaverton Transit Center</option>'
      );
    } else if (trainRoute === "402") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="9821">Beaverton Transit Center</option>' +
        '<option value="9969">Sunset Transit Center</option>' +
        '<option value="10120">Washington Park</option>' +
        '<option value="9758">Providence Park</option>' +
        '<option value="8334">Pioneer Square South</option>' +
        '<option value="8340">Rose Quarter</option>' +
        '<option value="8344">Hollywood/NE 42nd Ave</option>' +
        '<option value="8347">Gateway/NE 99th Ave</option>' +
        '<option value="10579">Portland Int\'l Airport</option>'
      );
    } else if (trainRoute === "501") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="10293">PSU South/SW 6th & College</option>' +
        '<option value="7777">Pioneer Courthouse/SW 6th Ave</option>' +
        '<option value="7763">Union Station/NW 6th & Hoyt</option>' +
        '<option value="11508">Interstate/Rose Quarter</option>' +
        '<option value="11511">N Prescott St</option>' +
        '<option value="11514">N Lombard</option>' +
        '<option value="11498">Expo Center</option>'
      );
    } else if (trainRoute === "502") {
      $("#reportTrainStopSelected").empty().append(
        '<option>Choose A Stop</option>' +
        '<option value="11498">Expo Center</option>' +
        '<option value="11501">N Lombard Transit</option>' +
        '<option value="11504">N Prescott St</option>' +
        '<option value="11507">Interstate/Rose Quarter</option>' +
        '<option value="7601">Union Station/NW 5th & Gilsan</option>' +
        '<option value="7646">Pioneer Place/SW 5th Ave</option>' +
        '<option value="7606">PSU South/SW 5th & Jackson</option>'
      );
    }
  });
  //End report screen train stop selector

  $("#trainStopSelected").change(function() {
    $(this).parent('form').submit();

    var trainStop = $('#trainStopSelected').find(":selected").val();
    // var trainStop = "13132";

    $.ajax({
      type: "GET",
      url: "https://developer.trimet.org/ws/v2/arrivals?locIDs=" + trainStop + "&xml=true&appID=Your_own_api_key",
      dataType: "xml",
      success: processXML
    });

    function processXML(xml) {
      var trainRoute = $('#trainSelected').find(":selected").val();
      var trainArray = new Array();
      $(xml).find("arrival").each(function() {
        // Train name (shortSign)
        var shortSign = $(this).attr('shortSign');
        // count to stop at 1
        var count = 0;
        if(shortSign.includes(trainRoute) && count === 0) {
          // Vehicle ID
          var trainId = $(this).attr('vehicleID');
          // Train name (fullSign)
          var fullSign = $(this).attr('fullSign');
          console.log("Fullsign: " + fullSign);
          // Delay
          var scheduledTime = parseInt($(this).attr('scheduled'));
          var estimatedTime = parseInt($(this).attr('estimated'));
          var delay;
          if(scheduledTime > estimatedTime) {
            delay = ((scheduledTime - estimatedTime) / 1000 / 60);
          } else {
            delay = ((estimatedTime - scheduledTime) / 1000 / 60);
          }
          console.log("Delay: " + delay);
          // Arrival Time
          var scheduledDate = new Date(0);
          scheduledDate.setUTCMilliseconds(scheduledTime);
          var arrivalTime = scheduledDate.toLocaleTimeString();
          console.log("arrival time: " + arrivalTime);

          var trainInformation = { fullSign: fullSign, delay: delay, arrival: arrivalTime, trainId: trainId };

          trainArray.push(trainInformation);
        }
        count = 1;
      });
      localStorage.clear();
      localStorage.setItem("trainArray", JSON.stringify(trainArray));
    }
  });

  var url = location.href;
  if(url.includes("reports")) {
    var trainArray = JSON.parse(localStorage.getItem("trainArray"));
    if(trainArray !== null) {
      // not doing foreach, see code below
      $("#trainName").text(trainArray[0]["fullSign"]);
      // console.log(train["fullSign"]);
      // console.log(train["delay"]);
      $("#trainDelay").text("Delay: " + trainArray[0]["delay"]);
      $("#trainArrival").text("Arrival Time: " + trainArray[0]["arrival"]);
    } else {
      $("#trainName").text("Train was null");
      console.log("Error: TrainArray is null");
    }
    /**** Google Map API ****/
    var myCenter = new google.maps.LatLng(45.5423508,-122.7945062);
    // function initMap() {
    //   // var myCenter = {lat: -25.363, lng: 131.044};
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 12,
    //     center: myCenter
    //
    //   });
    //   var marker = new google.maps.Marker({
    //     position: myCenter,
    //     map: map
    //   });
    // }
    function initialize() {
      var mapProp = {
      center:myCenter,
      zoom:12,
      scrollwheel:true,
      draggable:true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
    position:myCenter,
    })
    marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }
  $(".userReports").slideDown();

  /***** Trimet API Call to vehicles *****/
  // By passing in trainname and stop ID
  function getTrimetVehicleId(arrivalVehicleId) {
    $.ajax({
      type: "GET",
      url: "https://developer.trimet.org/ws/v2/vehicles?xml=true&appID=Your_own_api_key" + trimetApiKey,
      dataType: "xml",
      success: processXML
    });

    function processXML(xml) {
      $(xml).find("vehicle").each(function() {
        var vehicleId = $(this).attr("vehicleID");
        if(vehicleId === arrivalVehicleId) {
          // what we need back: Long/Lat NextStopId, lastStopId
          var vehicleID = $(this).attr("vehicleID");
          var shortSign = $(this).attr("signMessageLong");
          var fullSign = $(this).attr("signMessage");
          var longitude = $(this).attr("longitude");
          var latitude = $(this).attr("latitude");
          var lastLocID = $(this).attr("lastLocID");
          var nextLocID = $(this).attr("nextLocID");

          var trainMeta = { trainId: vehicleID, longitude: longitude, latitude: latitude, lastLocID: lastLocID, nextLocID: nextLocID, shortSign: shortSign, fullSign: fullSign };

          trainMetaArray.push(trainMeta);
        }
      });
      localStorage.clear();
      localStorage.setItem("trainMetaArray", trainMetaArray);
    }
  }
});
