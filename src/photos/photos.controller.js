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


  _renderView() {
    let album = this.albumsModel.albumById(decodeURI(window.location.hash).split('/')[1]);

    this._photosView.render(album)
      .then(() => {
        this._setRemoveButtons();
        this._setLoadImageListener();
        this._setSaveImageListener();
      });
  }

  _setRemoveButtons() {
    let removeButtons = document.getElementsByClassName('remove-photo');
    Array.from(removeButtons).forEach((button) => {
      button.addEventListener('click', () => {
        let photoId = button.parentElement.getAttribute('id');
        let albumId = decodeURI(window.location.hash).split('/')[1];
        this._removePhoto(albumId, photoId);
      });
    });
  }

  _setLoadImageListener() {
    let selectedImage = document.getElementsByClassName('selected-image')[0];
    let imageInput = document.getElementsByClassName('select-image-input')[0];

    imageInput.addEventListener('change', (e) => {
      let input = e.target;

      if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
          selectedImage.setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);

      } else {
        selectedImage.setAttribute('src', '');
      }
    });
  }

  _setSaveImageListener() {
    let saveButton = document.getElementsByClassName('save-image-button')[0];
    let selectedImage = document.getElementsByClassName('selected-image')[0];
    let imageTitleInput = document.getElementsByClassName('new-image-title')[0];
    let imageInput = document.getElementsByClassName('select-image-input')[0];
    saveButton.addEventListener('click', () => {
      let imgData = {
        encoded: getBase64Image(selectedImage),
        title: imageTitleInput.value
      };

      let albumId = decodeURI(window.location.hash).split('/')[1];
      if (imgData.title && imgData.encoded) {
        this.albumsModel.createImage(albumId, imgData)
          .then(() => {
            console.log(imageInput);
            imageTitleInput.value = '';
            selectedImage.setAttribute('src', '');
            this._renderView();
          });
      }
    });
  }
}

function getBase64Image(img) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  let dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}