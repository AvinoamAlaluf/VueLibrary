import SweetAlert from "sweetalert";
import BookService from "../../services/BookService";
import Edit from "../EditComponent/index.vue";
import Card from "../CardComponent/index.vue";

export default {
  data() {
    return {
      books: [],
      selectedBook: null,
      isModal: false,
      isDupTitle: false
    };
  },
  components: {
    Edit,
    Card
  },
  methods: {
    getBooksFromService() {
      BookService.getBooks().then(books => {
        this.books = books;
      });
    },
    toggleModal() {
      this.isModal = !this.isModal;
      if (!this.isModal && this.selectedBook) {
        this.selectedBook = null;
        this.isDupTitle = false;
      } else {
        this.selectedBook = BookService.getEmptyBook();
      }
    },
    getLastId() {
      var lastId = 0;
      for (let i = 0; i < this.books.length; i++) {
        let book = this.books[i];
        book.id > lastId ? (lastId = book.id) : "";
      }
      return lastId;
    },
    saveBook(book) {
      this.toggleModal();
      if (book.id) {
        let index = this.getBookIndexById(book.id);
        this.books.splice(index, 1, book);
      } else {
        book.id = this.getLastId() + 1;
        this.books.push(book);
      }
    },
    editBook(bookToEdit) {
      this.selectedBook = bookToEdit;
      this.isModal = true;
    },
    deleteBookById(bookId) {
      swal({
        title: "Are You Sure You Want To Delete Item Number " + bookId + "?",
        icon: "warning",
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          let index = this.getBookIndexById(bookId);
          this.books.splice(index, 1);
          swal("Deleted!", "Your imaginary file has been deleted!", "success");
        }
      });
    },
    getBookIndexById(bookId) {
      let index = -1;
      for (let i = 0; i < this.books.length; i++) {
        let book = this.books[i];
        bookId === book.id ? (index = i) : "";
      }
      return index;
    },
    checkForDup(bookToCheck) {
      this.isDupTitle = false;
      for (let i = 0; i < this.books.length; i++) {
        let book = this.books[i];
        if (bookToCheck.title.toLowerCase() === book.title.toLowerCase()) {
          if (bookToCheck.id === book.id) {
            continue;
          } else {
            this.isDupTitle = true;
          }
        }
      }
    }
  },
  created() {
    this.getBooksFromService();
  }
};
