import {albumsTemplate} from './albums.template';

import Util from '../services/util'

export default class AlbumsView {

  constructor() {
    this.element = document.getElementById('albums');
  }

  render(albums) {
    return new Promise((resolve, reject) => {
      this.element.innerHTML = albumsTemplate(albums);
      resolve();
    });
  }

}
