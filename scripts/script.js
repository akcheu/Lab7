// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
let postNum = 1;

// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.id = postNum;
        postNum++;
        newPost.addEventListener('click', () => {
          setState({name: 'entry', id: newPost.id});
        });
        document.querySelector('main').appendChild(newPost);
      });
    });
});

let settings = document.querySelector('header img');
settings.addEventListener('click', () => {
  setState({name: 'settings'});
});

let mainPage = document.querySelector('header h1');
mainPage.addEventListener('click', () => {
  setState({name: 'mainPage'});
});