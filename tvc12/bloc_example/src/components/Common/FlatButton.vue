<template>
  <div :class="btnClass" class="btn d-flex align-items-center" @click="$emit('click', $event)">
    <div>{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class FlatButton extends Vue {
  @Prop({ required: false, type: String, default: "" })
  private readonly title!: string;

  @Prop({ required: false, type: Boolean, default: false })
  private readonly isPrimary!: boolean;

  private get btnClass(): any {
    return { "btn-primary": this.isPrimary, "btn-secondary": !this.isPrimary };
  }
}
</script>
