import Util from '../services/util'

let photosTemplate = album => {
  return Util.html`
    <h3 rendered>${album.title}(${Util.count(album.photos)})</h3>
    <ul rendered class="photos-list">
        ${album.photos.map(photo => {
        if (photo !== null) {
          return Util.html`
            <li id='${photo._id}'>
                <img src="data:image/png;base64,${photo.encoded}">
                <p>${photo.title}</p>
                <button class="remove-photo">Remove</button>
            </li>`
        }
      })
    }
    </ul>`;
};

export {photosTemplate};