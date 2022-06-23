fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
    .then(response => response.json())
    .then(data => console.log(data));

function handleResponse(obj) {
    obj.items.forEach((item, index) => {
        if (index > 7) return; // limit 8 result
        let div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src="${item.volumeInfo.imageLinks.thumbnail}" alt="${item.singleTitle} by ${item.volumeInfo.authors[0]}" />
            <h1>${item.volumeInfo.title}</h1>
            <p><strong>${item.volumeInfo.authors[0]}</strong></p>
            <h1>${item.volumeInfo.description}</h1>
            <h1>${item.volumeInfo.pageCount}</h1>`

        let container = document.querySelector('.booklist-cards');
        container.append(div);
    })
}