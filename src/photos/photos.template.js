import Util from '../services/util'

let photosTemplate = album => {
  return Util.html`
    <h3>${album.title}</h3>
    <ul>
        ${album.photos.map(photo => {
        if (photo !== null) {
          return Util.html`
            <li id='${photo._id}'>
                <p>${photo.title}</p>
                <button class=".remove-photo">Remove</button>
            </li>`
        }
      })
    }
    </ul>`;
};

export {photosTemplate};