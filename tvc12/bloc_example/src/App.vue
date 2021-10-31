<template>
  <div id="app">
    <UserManagement></UserManagement>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserManagement from "@/screens/UserManagement/UserManagement.vue";

@Component({
  components: { UserManagement }
})
export default class App extends Vue {
}
</script>
