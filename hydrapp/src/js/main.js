'use strict';

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
      navigator.serviceWorker.register('serviceworker.js').then(
         function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
         },
         function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
         }
      );
   });
}

const counter = document.querySelector('.glass__number--js');
const addGlass = document.querySelector('.glass__button--add-js');
const removeGlass = document.querySelector('.glass__button--remove-js');
let today = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(today)) {
   localStorage.setItem(today, 0);
}
counter.innerHTML = localStorage.getItem(today);

addGlass.addEventListener('click', e => {
   e.preventDefault();
   counter.innerHTML = parseInt(counter.innerHTML) + 1;
   localStorage.setItem(today, parseInt(counter.innerHTML));
});

removeGlass.addEventListener('click', e => {
   e.preventDefault();
   const currentCounter = parseInt(counter.innerHTML);
   if (currentCounter > 0) counter.innerHTML = currentCounter - 1;
   localStorage.setItem(today, parseInt(counter.innerHTML));
});
