// 
// $(function(){
//  // if (train selected is NOT NULl ---AND --- trainStopSelected is NOT NULL)
// $("#trainSelectForm").change(function(){
//    if (($("#trainSelected").val() != "null") && ($("#trainStopSelected").val() != "null")){
//        $("#trainSelectForm").submit()
//       //  $(".userReports").hide();
//
//     };
//
//     // $(".userReports").show();
//   });
// });
//
// //  function(){
//   //

  $(function(){
    $("#trainStopSelected").change(function(){
      $(this).parent('form').submit();
    });

    // $("#userReports").animate({
    //     left:'250px',
    //     opacity:'0.5',
    //     height:'150px',
    //     width:'150px'
    // });
    $(".userReports").slideDown();
});
