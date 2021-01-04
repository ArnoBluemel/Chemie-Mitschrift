<template>
  <div class="demo">
    {{ msg }}
    <div>
      <input type="text" v-model="text" />
    </div>
    {{ result }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello this is <demo-component>",
      text: "default",
    };
  },
  computed: {
    result: function() {
      return this.text + " was computed";
    },
  },
};
</script>
