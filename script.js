fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then(response => response.json())
    .then(data => console.log(data));

function handleResponse(obj) {
    obj.items.forEach((item, index) => {
        if (index > 7) return; // limit 8 result
        let div = document.createElement('div');
        div.className = 'books card shadow mt-4 d-flex';
        div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" class="m-4" height="200" width="150" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
            <h4 class="card-title">${item.volumeInfo.title}</h1>
            <p class="card-text"><strong>${item.volumeInfo.authors}</strong></p>
            <h8 class="m-4">${item.volumeInfo.description}</h8>
            <h8 class="m-4">Pages:  ${item.volumeInfo.pageCount}</h8>`

        let container = document.querySelector('.booklist-cards');
        container.append(div);
    })
}