export default {
  data() {
    return {
      book: JSON.parse(JSON.stringify(this.bookToEdit)),
      isTitleValid: false,
      isAuthorValid: false,
      isImgValid: false,
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
    validateImg() {
      this.book.img ? (this.isImgValid = true) : (this.isImgValid = false);
    },
    validateDate() {
      if (this.book.date) {
        new Date(this.book.date) !== "invalid Date"
          ? (this.isDateValid = true)
          : (this.isDateValid = false);
      }
    },
    checkBools() {
      if (
        this.isTitleValid &&
        this.isAuthorValid &&
        this.isImgValid &&
        this.isDateValid
      ) {
        return true;
      }
      return false;
    },
    validateAll() {
      this.validateTitle();
      this.validateAuthor();
      this.validateImg();
      this.validateDate();
    },
    saveClicked() {
      if (this.checkBools()) {
        this.$emit("bookSaveClicked", this.book);
      }
    }
  },
  mounted() {
    this.bookToEdit.id ? this.validateAll() : "";
  },
  props: {
    bookToEdit: Object,
    isDuplicateTitle: Boolean
  }
};
