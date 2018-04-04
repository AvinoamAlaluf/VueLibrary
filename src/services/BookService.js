import axios from 'axios';

function getBooks() {
   return axios.get(`static/books.json`)
    .then(({ data }) => data)
};

function getEmptyBook(){
    return {
        title:'',
        author:'',
        img:'',
        date:'',
    };
}

export default {
    getBooks,
    getEmptyBook
}