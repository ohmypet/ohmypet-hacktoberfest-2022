export default {
  name: 'Header',
  data() {
    return {
      currentActive: 'home',
    };
  },
  methods: {
    getActive(name) {
      return name === this.currentActive ? 'active' : '';
    },
    onClickHeader(name) {
      this.$emit('onClickHeader', name);
      this.currentActive = name;
    },
  },
};
