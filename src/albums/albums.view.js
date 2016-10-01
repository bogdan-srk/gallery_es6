import {albumsTemplate} from './albums.template';

import Util from '../services/util'

export default class AlbumsView {

  constructor() {
    this.element = document.getElementById('albums');
  }

  render(albums) {
    return new Promise((resolve, reject) => {
      let rendered = document.querySelectorAll('[rendered]');
      if (rendered.length > 0){
        Array.from(rendered).forEach((element) => element.remove());
      }
      this.element.innerHTML += albumsTemplate(albums);
      resolve();
    });
  }

}
