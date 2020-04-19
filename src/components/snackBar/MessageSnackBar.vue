<template>
  <div>
    <md-snackbar :md-active.sync="status">{{ message }}</md-snackbar>
  </div>
</template>

<script>
import { EventBus } from "../../main";
export default {
  name: "MessageSnackBar",
  data: () => ({
    status: false,
    message: ""
  }),
  mounted() {
    EventBus.$on("MessageSnackBar", data => {
      (this.message = data), (this.status = true);
    });
  }
};
</script>
