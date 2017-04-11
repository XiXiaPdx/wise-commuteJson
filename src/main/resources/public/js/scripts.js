
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
