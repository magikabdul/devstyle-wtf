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

// place your code below

console.log(`Hello world!`);

const list = document.querySelector('.projects__list--js');

fetch('https://api.github.com/users/magikabdul/repos?sort=updated&direction=desc')
   .then(resp => resp.json())
   .then(resp => {
      const repos = resp;
      for (const repo of repos) {
         const { description, homepage, html_url, name } = repo;
         list.innerHTML += `
			<li class="project">
				<div class="project__container">
					<img class="project__logo" src="assets/img/github-brands.svg" alt="" />
					<h3 class="project__title">${name}</h3>
					${description ? `<p class="project__description">${description}</p>` : 'No description '}
				</div>
				<div class="project__footer">
					${
                  homepage
                     ? `<a href="${homepage}" target="_blank" rel="nofollow noreferrer" class="project__link project__link--demo" title="Demo: ${name}.">Demo</a>`
                     : ''
               }
					
					<a href="${html_url}" target="_blank" rel="nofollow noreferrer" class="project__link project__link--code" title="Source code: ${name}.">Github</a>
				</div>
			</li>
			`;
      }
   })
   .catch(err => {
      console.log(err);
   });
