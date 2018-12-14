// Initialize Firebase
$(document).ready(function() {



$("#submit").on("click", function(event){
  event.preventDefault();
  var artist = $("#name").val().trim();
  var artistID = $("#zipcode").val().trim();
  console.log(artist);




// Weather App API Key
var APIKey = "8189f287014498b50483839cf645fcef";
var queryURL = "https://api.musixmatch.com/ws/1.1/artist.search?q_artist=" + artist + "&page_size=5&apikey=8189f287014498b50483839cf645fcef"
var proxy = "https://cors-anywhere.herokuapp.com/"
// artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1&apikey=8189f287014498b50483839cf645fcef

var finishedurl = proxy + queryURL;

  $.ajax({
    url: finishedurl,
    method: "GET",
    crossDomain: true,
    dataType: "json",
    contentType: "application/json"
  }).then(function(response) {
    console.log(response);
  });

  var APIKey = "8189f287014498b50483839cf645fcef";
  var queryURL2 = "https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=" + artistID +"&s_release_date=desc&g_album_name=1&apikey=8189f287014498b50483839cf645fcef"
  var proxy = "https://cors-anywhere.herokuapp.com/"
  // artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1&apikey=8189f287014498b50483839cf645fcef
  
  var finishedurl = proxy + queryURL2;
  
    $.ajax({
      url: finishedurl,
      method: "GET",
      crossDomain: true,
      dataType: "json",
      contentType: "application/json"
    }).then(function(response) {
      console.log(response);
    });



});

});
