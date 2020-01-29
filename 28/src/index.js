import axios from 'axios';
import {tap, logErr} from './components/promisesFuncs';
import {apiUrl} from './components/constants';
import {Starship} from './components/starship';

import './main.css';
import './components/starship/main.css';

axios
  .get(`${apiUrl}/starships`)
  .then(tap(console.log))
  .then(data => {
    const page = document.querySelector('.page');
    let {
      data: {results: starships}
    } = data;
    starships.map(item => new Starship(item)).forEach(item => item.renderCard(page));
  })
  .catch(logErr);
