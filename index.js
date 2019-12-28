'use strict';

function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      printResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function printResults(responseJson) {
  console.log("responseJson.message: " + responseJson.message);
  const array_urls = Object.values(responseJson.message);
  console.log("dogs = " + array_urls);
  const num = array_urls.length;
  console.log(`${num} random dogs selected`);

  for (let i=0; i < num; i++) {
    console.log(`Dog: ${array_urls[i]}`)
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num_dogs = $("#how-many").val();
    getDogImages(num_dogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});