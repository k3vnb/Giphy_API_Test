const apiKey = require('./../.env').apiKey;
import {GiphyLand} from './../js/giphy.js';

$(document).ready(function() {
  $('form#search').submit(function(event) {
    event.preventDefault();
    $('.result').empty();
    const gifs = $('#gif-search-input').val();
    $('#gif-search-input').val("");
    const newRequest = new GiphyLand(gifs);
    if (newRequest.getGiphs() === 'success') {

      console.log("boo" + newRequest.getGiphs());
    };
  });
});
















// COPY OF CODE:
// $(document).ready(function() {
//   $('form#search').submit(function(event) {
//     event.preventDefault();
//     $('.result').empty();
//     const gifs = $('#gif-search-input').val();
//     $('#gif-search-input').val("");
//     $.ajax({
//       url: `http://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=${apiKey}&limit=50`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(thing) {
//         let a = Math.floor(Math.random() * 45) + 1;
//         let b = a + 5;
//           for (var i = a; i < b; i++){
//             console.log(i + "i");
//             $('.result').append(`<img src="${thing.data[i].images.fixed_height.url}">`);
//           }
//     },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     }); //ajax callback
//   }); //form submit
// }); //doc ready
