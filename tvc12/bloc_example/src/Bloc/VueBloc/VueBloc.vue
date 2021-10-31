<template>
  <div>
    <template v-if="currentState">
      <slot :state="currentState" name="default"></slot>
    </template>
    <template>
      <slot :state="currentState" name="empty"></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Bloc as DiBloc } from "@/Bloc";
import { RandomUtils } from "@/utils/random.utils";

@Component
export default class VueBloc<Event, State, Bloc extends DiBloc<Event, State>> extends Vue {
  private readonly channel = RandomUtils.nextString();

  @Prop({ required: true })
  private readonly bloc!: Bloc;

  @Prop({ required: false, type: Function })
  private renderWhen?: (state: State) => boolean;

  @Prop({ required: false, type: Function })
  private listenWhen?: (state: State) => boolean;

  private currentState: State | null = null;

  created() {
    this.currentState = this.bloc.state;
    this.bloc.addListener({
      key: this.channel,
      onStateChange: this.handleOnStateChange
    });
  }

  beforeDestroy() {
    this.bloc.removeListener(this.channel);
  }

  private handleOnStateChange(state: State) {
    if (this.canListen(state)) {
      this.emitStateChange(state);
    }
    if (this.canRender(state)) {
      this.currentState = state;
    }
  }

  private canRender(state: State): boolean {
    if (this.renderWhen) {
      return this.renderWhen(state);
    } else {
      return true;
    }
  }

  private canListen(state: State) {
    if (this.listenWhen) {
      return this.listenWhen(state);
    } else {
      return true;
    }
  }

  @Emit("onStateChange")
  private emitStateChange(state: State): State {
    return state;
  }
}
</script>
