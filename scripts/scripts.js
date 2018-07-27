function toggleMenu() {
    console.log(document.getElementById ("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>