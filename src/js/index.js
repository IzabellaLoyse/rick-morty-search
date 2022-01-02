/* eslint-disable import/extensions */
import getDataFromAPI from './service/api.js';

// Returns the total value of characters
const getTotalCharacters = async () => {
  const totalCharacters = document.querySelector('.js-total-characters');

  const data = await getDataFromAPI('character');
  const { info } = data;
  const { count } = info;

  totalCharacters.insertAdjacentHTML('afterbegin', `${count}`);
};

getTotalCharacters();

// Insert the list of data about the characters in the HTML
const insertListIntoHTML = (data, list) => {
  data.forEach((character) => {
    const {
      name, status, species, gender, image, origin,
    } = character;

    list.insertAdjacentHTML(
      'beforeend',
      `
    <li class="c-list-characters__card">
    <img
      class="c-list-characters__image"
      src="${image}"
      alt="${name}"
    />

      <article class="c-list-characters__content">
        <h3 class="c-character__name">${name}</h3>
        <p class="c-character__info is-character__info--status
        js-character-status">${status}</p>
        <p class="c-character__info">${species}</p>
        <p class="c-character__info">${gender}</p>
        <p class="c-character__info">${origin.name}</p>
      </article>
      </li>
      `,
    );
  });
};

// Returns a list with the data of 12 characters
const getDataOfCharacter = async () => {
  const listCharacters = document.querySelector('.js-list-characters');

  try {
    const data = await getDataFromAPI(
      'character/[1,2,3,4,5,7,8,9,10,11,12,13]',
    );

    insertListIntoHTML(data, listCharacters);
  } catch (error) {
    throw new Error(error);
  }
};

getDataOfCharacter();

// Returns a list with the character data entered in the search field
const searchCharacter = async () => {
  const inputSearch = document.querySelector('.js-search-input');
  const listCharacters = document.querySelector('.js-list-characters');
  const listSearchCharacter = document.querySelector(
    '.js-list-search-characters',
  );

  try {
    const { value } = inputSearch;

    const data = await getDataFromAPI(`character/?name=${value}`);
    const { results } = data;

    if (value !== results.name) listSearchCharacter.textContent = '';

    listCharacters.classList.add('is-list-characters--hidden');
    listSearchCharacter.classList.remove('is-list-characters--hidden');

    insertListIntoHTML(results, listSearchCharacter);
  } catch (error) {
    throw new Error(error);
  }
};

document.querySelector('.js-btn-search').addEventListener('click', () => {
  searchCharacter();
});

document
  .querySelector('.js-search-input')
  .addEventListener('keyup', (event) => {
    if (event.keyCode === 13) searchCharacter();
  });
