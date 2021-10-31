/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 10:46 PM
 */

import { RandomUtils } from "@/utils/random.utils";
import { Emit, Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Bloc as DiBloc } from "../index";

@Component
export class VueBlocListener<Event, State, Bloc extends DiBloc<Event, State>> extends Vue {
  private readonly channel = RandomUtils.nextString();

  @Prop({ required: true })
  private readonly bloc!: Bloc;

  @Prop({ required: false, type: Function })
  private listenWhen?: (state: State) => boolean;

  created() {
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

  render(h: any) {
    return this.$slots.default;
  }
}
