import {photosTemplate} from './photos.template';
import PhotosController from './photos.controller';

export default class PhotosView {

  constructor(controller) {
    this.element = document.getElementById('photos');
    this.controller = controller;
  }

  render(album) {
    return new Promise((resolve, reject) => {
      let rendered = document.querySelectorAll('rendered');
      if (rendered.length > 0){
        Array.from(rendered).forEach((element) => element.remove());
      }
      this.element.innerHTML += photosTemplate(album);
      resolve();
    });
  }
}
