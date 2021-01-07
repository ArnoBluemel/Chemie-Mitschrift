<script functional>
const katex = require("katex");

export default {
  functional: true,
  render(createElement, context) {
    const defaultSlot = context.slots().default;
    return createElement("div", {
      staticClass: "formulae",
      domProps: {
        innerHTML: katex.renderToString(
          defaultSlot.map((v) => v.text).join("")
        ),
      },
    });
  },
};
</script>