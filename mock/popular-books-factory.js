let nextBookId = 1;
const createBook = (title, ordersCount) => {
    return {
        id: nextBookId++,
        title,
        ordersCount
    }
};

const generateBooks = (count = 3) => {
    var books = [];
    for (var i = 0; i < count; i++) {
        let title = 'Title ' + (i + 1);
        let ordersCount = Math.floor((Math.random() * 20) + 5);
        let book = createBook(title, ordersCount);
        books.push(book);
    }
    return books;
};

export default generateBooks;