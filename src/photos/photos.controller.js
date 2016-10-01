import AlbumsModel from '../services/albums.model'
import PhotosView from './photos.view'

export default class PhotosController {
  constructor() {
    console.log('Photos Controller');

    this.albumsModel = new AlbumsModel();

    this._photosView = new PhotosView(this);
    this._renderView();
  }

  _removePhoto(albumId, photoId) {
    this.albumsModel.removePhoto(albumId, photoId).then(() => {
      this._renderView();
    });
  }

  _renderView(){
    let album = this.albumsModel.albumById(decodeURI(window.location.hash).split('/')[1]);

    this._photosView.render(album)
      .then(() => {
        let removeButtons = document.getElementsByClassName('remove-photo');
        Array.from(removeButtons).forEach((button) => {
          button.addEventListener('click', () => {
            let photoId = button.parentElement.getAttribute('id');
            let albumId = decodeURI(window.location.hash).split('/')[1];
            this._removePhoto(albumId, photoId);
          });
        });
      });
  }

}