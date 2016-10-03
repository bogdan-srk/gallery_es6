import AlbumsModel from '../services/albums.model'
import AlbumView from './albums.view'

export default class AlbumsController {
  constructor() {

    this.albumsModel = new AlbumsModel();
    this._albumView = new AlbumView();

    this._renderView();
  }

  _setRemoveListeners() {
    let removeButtons = document.getElementsByClassName('remove-album');
    Array.from(removeButtons).forEach((button) => {
      button.addEventListener('click', () => {
        let albumId = button.parentElement.getAttribute('id');
        this._removeAlbum(albumId);
      });
    });
  }

  _setCreateListener() {
    let createButton = document.getElementsByClassName('album-create-button')[0];
    let createInput = document.getElementsByClassName('album-create-input')[0];

    createButton.addEventListener('click', () => {
      this.albumsModel.createAlbum(createInput.value).then(() => {
        createInput.value = '';
        this._renderView();
      });

    });
  }

  _removeAlbum(albumId) {
    this.albumsModel.removeAlbum(albumId)
      .then(() => {
        this._renderView();
      });
  }

  _renderView() {
    this._albumView.render(this.albumsModel.albums())
      .then(() => {
        this._setRemoveListeners();
        this._setCreateListener();
      });
  }
}