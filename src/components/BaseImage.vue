<template>
  <img
    v-bind="imageAttrs"
    :src="src"
    :alt="alt"
    :loading="loading"
    :decoding="decoding"
    :width="width"
    :height="height"
    @load="onLoad"
  />
</template>

<script>
export default {
  name: 'BaseImage',
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    loading: {
      type: String,
      default: 'lazy',
    },
    decoding: {
      type: String,
      default: 'async',
    },
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    imageAttrs() {
      return {
        ...this.$attrs,
        ...this.attrs,
      };
    },
  },
  methods: {
    onLoad(event) {
      this.$emit('load', event);
    },
  },
};
</script>
