// Allen Cheung | CSE 110 | Lab 7
// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
let postNum = 1;


// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  const settings = {name: 'settings'};
  const mainPage = {name: 'mainPage'};
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.id = postNum;
        postNum++;
        newPost.addEventListener('click', () => {
          if (history.state.name != 'entry') {
            history.pushState({name: 'entry', id: newPost.id}, '', 'entry#' + newPost.id);
            setState({name: 'entry', id: newPost.id});
          }
        });
        document.querySelector('main').appendChild(newPost);
      });

      let settingIcon = document.querySelector('header img');
      settingIcon.addEventListener('click', () => {
        if (history.state.name != 'settings') {
          history.pushState(settings, '', 'settings');
          setState(settings);
        }
      });

      let menuBar = document.querySelector('header h1');
      menuBar.addEventListener('click', () => {
        if (history.state.name != 'mainPage'){
          history.pushState(mainPage, '', location.origin);
          setState(mainPage);
        }
      });
    });
});

window.addEventListener('popstate', (event) => {
  setState(event.state);
});