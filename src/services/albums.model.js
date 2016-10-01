let albums = [
  {
    _id: 0, title: 'title1', photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]
  },

  {
    _id: 1, title: 'title2', photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]
  },

  {
    _id: 2, title: 'title3', photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]
  },

  {
    _id: 3, title: 'title4', photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]
  },

  {
    _id: 4, title: 'title5', photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
  ]
  }
];

export default class AlbumsModel {
  constructor() {
    this._albums = [];
    this._readData();

    // this._albums = albums;
    // this._saveData();

  }

  _saveData() {
    localStorage.setItem('gallery', JSON.stringify(this._albums));
  }

  _readData() {
    let data = JSON.parse(localStorage.getItem('gallery'));
    if (data) {
      this._albums = data;
    } else {
      this._albums = albums;
      this._saveData();
    }
  }

  albums() {
    return this._albums;
  }

  albumById(id) {
    return this._albums[id];
  }

  removePhoto(albumId, photoId){
    delete this._albums[albumId].photos[photoId];
    this._saveData();
  }
}