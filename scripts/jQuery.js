 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
 });


$(function() {
   var servicepricing = [];

   $.getJSON('servicepricing.json', function(data) {
       $.each(data.pricing, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.service + "</td>" +
           "<td>" + f.cost + "</td>" + "<td>"
           $(tblRow).appendTo("#userdata tbody");
     });

   });

});
