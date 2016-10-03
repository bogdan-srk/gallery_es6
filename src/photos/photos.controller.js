import AlbumsModel from '../services/albums.model'
import PhotosView from './photos.view'

export default class PhotosController {
  constructor() {

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
        captureCamera();
        takePhoto();
        setSwitchUploadListener();
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

function captureCamera() {
  let video = document.getElementsByClassName('capture-camera')[0];
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true},
      (stream) => {
        if (video.mozSrcObject !== undefined) {
          video.mozSrcObject = stream;
        } else {
          video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
        }
        video.play();
      },
      (error) => {
        console.error('An error occurred: [CODE ' + error.code + ']');
      });
  } else {
    console.warn('Native device media streaming (getUserMedia) not supported in this browser.');
  }
}

function takePhoto() {
  let takePhotoButton = document.getElementsByClassName('take-photo')[0];
  let video = document.getElementsByClassName('capture-camera')[0];
  let selectedImg = document.getElementsByClassName('selected-image')[0];

  takePhotoButton.addEventListener('click', () => {
    video.pause();
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas
      .getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    selectedImg.src = canvas.toDataURL();
  });
}

function setSwitchUploadListener() {
  let switchUpload = {
    file: document.getElementsByClassName('switch-upload-file')[0],
    cam: document.getElementsByClassName('switch-upload-cam')[0]
  };
  let uploadTypeDiv = {
    file: document.getElementsByClassName('from-file')[0],
    cam: document.getElementsByClassName('from-camera')[0]
  };
  let clickListener = (e) => {
    switchUpload.file.className = 'switch-upload-file';
    switchUpload.cam.className = 'switch-upload-cam';
    e.target.className += ' active'
  };
  switchUpload.file.addEventListener('click', (e) => {
    clickListener(e);
    uploadTypeDiv.file.removeAttribute('hidden');
    uploadTypeDiv.cam.setAttribute('hidden', 'hidden');

  });
  switchUpload.cam.addEventListener('click', (e) => {
    clickListener(e);
    uploadTypeDiv.cam.removeAttribute('hidden');
    uploadTypeDiv.file.setAttribute('hidden', 'hidden');
  });
}

