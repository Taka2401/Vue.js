export const tokyoNumber = {
  data() {
    return {
      title: 'Welcome To Tokyo',
      subTitle: "tokyo is a great city",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};