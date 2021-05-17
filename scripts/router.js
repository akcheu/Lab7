// Allen Cheung | CSE 110 | Lab 7
// router.js

export const router = {};
const body = document.querySelector('body');
const menu = document.querySelector('header h1');

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(state) {
  if (state.name == 'settings') {
    body.className = 'settings';
    menu.textContent = 'Settings';
  } else if (state.name == 'mainPage') {
    body.className = '';
    menu.textContent = 'Journal Entries';
  } else if (state.name == 'entry') {
    body.className = 'single-entry';
    menu.textContent = 'Entry ' + state.id;
    body.removeChild(document.getElementsByTagName('entry-page')[0]);
    let entryPageElement = document.createElement('entry-page');
    let journalEntryElement = document.getElementById(state.id);
    entryPageElement.entry = journalEntryElement.entry;
    body.appendChild(entryPageElement);
  }
}