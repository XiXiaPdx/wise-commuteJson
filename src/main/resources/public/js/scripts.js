
  $(function(){
    $("#trainStopSelected").change(function(){
      $(this).parent('form').submit();
    });

    $(".userReports").slideDown();
});
