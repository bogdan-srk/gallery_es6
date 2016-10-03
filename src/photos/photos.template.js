import Util from '../services/util'

let photosTemplate = album => {
  return Util.html`
    <h3 rendered>${album.title}(${Util.count(album.photos)})</h3>
    <ul rendered class="photos-list">
        ${album.photos.map(photo => {
        if (photo !== null) {
          return Util.html`
            <li class="photo" id='${photo._id}'>            
                <button class="remove-photo">×</button>
                <img class="photo-image" src="data:image/png;base64,${photo.encoded}">
                <p class="photo-title">${photo.title}</p>
            </li>`
            }
          })
        }
    </ul>`;
};

export {photosTemplate};