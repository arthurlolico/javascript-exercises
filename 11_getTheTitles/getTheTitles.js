const getTheTitles = function(books) {

    arrayBooks = books.reduce((array,currentItem) => {
        array.push(currentItem.title);
        return array;
    },[]);
    return arrayBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
