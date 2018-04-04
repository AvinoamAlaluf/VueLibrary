export default {
  methods: {
    deleteClicked() {
      this.$emit("deleteBookClicked", this.item.id);
    },
    editClicked() {
      this.$emit("editBookClicked", this.item);
    }
  },
  props: {
    item: Object
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.match(/\w+/g).join(" ");
      value = value.toString().toLowerCase();
      return value.replace(/\w\S*/g, function(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
      });
    },
    yearOnly(value) {
      return new Date(value).getFullYear();
    }
  }
};
