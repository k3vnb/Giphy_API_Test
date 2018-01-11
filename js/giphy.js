const apiKey = require('./../.env').apiKey;

export class GiphyLand {
  constructor(inputTopic, outputGifs) {
    this.inputTopic = inputTopic;
    this.outputGifs = this.getGiphs();
  }

  getGiphs(){
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${this.inputTopic}&api_key=${apiKey}&limit=50`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log("success");
        let a = Math.floor(Math.random() * 45) + 1;
        let b = a + 5;
        for (var i = a; i < b; i++){
          let fiveGifs = [];
          fiveGifs.push(response.data[i].images.fixed_height.url);
          console.log("5gifs" + fiveGifs);
          $('.result').append(`<img class="gif-place" src="${response.data[i].images.fixed_height.url}">`);
        }

      },//success
        complete: function() {
          console.log("complete");
      },

      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });//ajax
  } //getGiphs()
}//GetGiphy
