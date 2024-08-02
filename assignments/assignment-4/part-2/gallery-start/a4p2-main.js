/*    
  Name:           Thavisha Thanippuli Appuhamilage
  Student #:      100942614
  File:           a4p2-main.js
  Date created:   July 22nd, 2024
  Last Modified:  August 2nd, 2024
  Section:        6
  Description:    This assignment includes the code for a JavaScript powered image gallery.
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
for (const fileName of imageFileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${fileName}`);
    newImage.setAttribute('alt', alternativeTexts[fileName]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", event => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    }); 
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});