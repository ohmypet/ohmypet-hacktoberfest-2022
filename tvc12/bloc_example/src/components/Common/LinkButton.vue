<template>
  <div class="btn btn-link p-0" @click="$emit('click', $event)">
    <h5>{{ title }}</h5>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class LinkButton extends Vue {
  @Prop({ required: false, type: String, default: "" })
  private readonly title!: string;
}
</script>
