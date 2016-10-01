import {albumsTemplate} from './albums.template';

import Util from '../services/util'

export default class AlbumsView {

  constructor() {
    this.element = document.getElementById('albums');
  }

  render(albums) {
    return new Promise((resolve, reject) => {
      let albumsList = document.getElementsByClassName('albums-list')[0];
      if (albumsList) {
        albumsList.remove();
      }
      this.element.innerHTML += albumsTemplate(albums);
      resolve();
    });
  }

}
