fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then(response => response.json())
    .then(data => console.log(data));

function handleResponse(obj) {
    const featuredContainer = document.querySelector('.featured-books');
    const otherContainer = document.querySelector('.other-books');
    const otherBooks = obj.items
    const featuredBooks = otherBooks.splice(7, 2)
    featuredContainer.insertAdjacentHTML('beforeend', renderListHtml(featuredBooks))
    otherContainer.insertAdjacentHTML('beforeend', renderListHtml(otherBooks))
}

function renderListHtml(items) {
    return items.map(item => renderItemHtml(item)).join('')
}

// injects elements into html 
function renderItemHtml(item) {
    return `<button><div class="option"><img src="${item.volumeInfo.imageLinks.thumbnail}" class="thumbnails" 
    alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
    <div>
    <h4>${item.volumeInfo.title}</h4>
    <p><strong>${item.volumeInfo.authors}</strong></p>
    <h8>${item.volumeInfo.description.slice(0, 140)}</h8> 
    </div>
    <br>
    <h8>Pages:  ${item.volumeInfo.pageCount}</h8>
    </div></button>`
}