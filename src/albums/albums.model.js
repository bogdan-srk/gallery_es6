let albums = [
  {_id: 0, title: 'title1',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
    ]},

  {_id: 1, title: 'title2',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
    ]},

  {_id: 2, title: 'title3',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
    ]},

  {_id: 3, title: 'title4',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
    ]},

  {_id: 4, title: 'title5',photos: [
    {_id: 0, title: 'title'},
    {_id: 1, title: 'title'},
    {_id: 2, title: 'title'},
    {_id: 3, title: 'title'},
    {_id: 4, title: 'title'}
    ]}
];

export default class AlbumsModel {

  constructor() {
      this._albums = albums;
  }

  all() {
    return this._albums
  }

  add(title) {
    this._albums.push({
      _id: this._albums.length - 1,
      title
    });
  }

  remove(id) {
    delete this._albums[id]
  }
}