/* eslint-disable import/extensions */
import getDataFromAPI from './service/api.js';

const getTotalCharacters = async () => {
  const totalCharacters = document.querySelector('.js-total-characters');

  const data = await getDataFromAPI('character');
  const { info } = data;
  const { count } = info;

  totalCharacters.insertAdjacentHTML('afterbegin', `${count}`);
};

getTotalCharacters();

const getDataOfCharacter = async () => {
  const listCharacters = document.querySelector('.js-list-characters');

  const data = await getDataFromAPI('/character/[1,2,3,4,5,7,8,9,10,11,12,13]');

  data.forEach((character) => {
    const {
      name, status, species, gender, image, origin,
    } = character;

    listCharacters.insertAdjacentHTML(
      'beforeend',
      `
      <li class="c-list-characters__card">
      <img
        class="c-list-characters__image"
        src="${image}"
        alt="${name}"
      />

      <article class="c-list-characters__content">
        <h3 class="js-character-name">${name}</h3>
        <p class="js-character-status">${status}</p>
        <p class="js-character-species">${species}</p>
        <p class="js-character-species">${gender}</p>
        <p class="js-character-species">${origin.name}</p>
      </article>
    </li>
    `,
    );
  });
};

getDataOfCharacter();

const input = document.querySelector('.js-search-input');

input.addEventListener('keydown', () => {
  console.log(input.value);
});
