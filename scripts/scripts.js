function toggleMenu() {
    console.log(document.getElementById ("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
 });