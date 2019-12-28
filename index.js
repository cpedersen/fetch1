'use strict';

function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      printResults(responseJson, num))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function printResults(responseJson, num) {
  //replace the existing image with the new one
  console.log(`${num} random dogs selected`);
  
  const keys = Object.keys(responseJson);
  for (const key of keys) {
    console.log(responseJson[key]);
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