fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then(response => response.json())
    .then(data => console.log(data));

function handleResponse(obj) {
    obj.items.forEach((item, index) => {
        if (index > 7)
        return;
        let div = document.createElement('div');
        div.className = 'books';
        div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" class="thumbnails" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
            <h4>${item.volumeInfo.title}</h1>
            <p><strong>${item.volumeInfo.authors}</strong></p>
            <h8>${item.volumeInfo.description}</h8>
            <br>
            <br>
            <h8>Pages:  ${item.volumeInfo.pageCount}</h8>`

        let container = document.querySelector('.booklist-cards');
        container.append(div);

        if (index < 6)
        return;
        let featured = document.createElement('featured');
        featured.className = 'featured';
        featured.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" class="thumbnails" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
            <h4>${item.volumeInfo.title}</h1>
            <p><strong>${item.volumeInfo.authors}</strong></p>
            <h8>${item.volumeInfo.description}</h8>
            <br>
            <br>
            <h8>Pages:  ${item.volumeInfo.pageCount}</h8>`

        let section = document.querySelector('.booklist-featured');
        section.append(featured);
    })
}