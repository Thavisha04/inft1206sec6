/*    
  Name:           Thavisha Thanippuli Appuhamilage
  Student #:      100942614
  File:           a4p2-main.js
  Date created:   July 22nd, 2024
  Last Modified:  ???
  Section:        6
  Description:    ???
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeTexts = ["Closeup of a human eye", "Rock with waves", "Purple and white flower bunch", "Egyptian cave painting", "Brown, black and white butterfly"];

/* Looping through images */


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
