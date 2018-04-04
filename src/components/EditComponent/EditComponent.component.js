export default {
  data() {
    return {
      book: JSON.parse(JSON.stringify(this.bookToEdit)),
      isTitleValid: false,
      isAuthorValid: false,
      isDateValid: false
    };
  },
  methods: {
    cancleClicked() {
      this.$emit("closeModal");
    },
    validateTitle() {
      this.book.title
        ? (this.isTitleValid = true)
        : (this.isTitleValid = false);
    },
    validateTitleDup() {
      this.$emit("checkTitleDup", this.book);
    },
    handleTitleValidation() {
      this.validateTitle();
      this.validateTitleDup();
    },
    validateAuthor() {
      this.book.author
        ? (this.isAuthorValid = true)
        : (this.isAuthorValid = false);
    },
    validateDate() {
      if (this.book.date && this.book.date.length === 10) {
        let re = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        re.test(this.book.date)
          ? (this.isDateValid = true)
          : (this.isDateValid = false);
      } else {
        this.isDateValid = false;
      }
    },
    checkBools() {
      if (
        this.isTitleValid &&
        this.isAuthorValid &&
        this.isDateValid
      ) {
        return true;
      }
      return false;
    },
    validateAll() {
      this.validateTitle();
      this.validateAuthor();
      this.validateDate();
    },
    saveClicked() {
      if (this.checkBools()) {
        this.$emit("bookSaveClicked", this.book);
      }
    }
  },
  mounted() {
    this.bookToEdit.id
      ? this.validateAll()
      : (this.book.img = "static/imgs/default.jpg");
  },
  props: {
    bookToEdit: Object,
    isDuplicateTitle: Boolean
  }
};
