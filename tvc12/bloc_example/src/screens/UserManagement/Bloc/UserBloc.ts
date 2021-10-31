import { Bloc, DefaultBlocLogger } from "@/Bloc";
import { AddUser, DeleteUser, UpdateUser, UserEvent } from "@/screens/UserManagement/Bloc/UserEvent";
import { DefaultUserState, ErrorState, LoadedState, LoadingState, UserState } from "@/screens/UserManagement/Bloc/UserState";
import { User } from "@/screens/UserManagement/Model";
import { UserService } from "@/screens/UserManagement/UserService";

export class UserBloc extends Bloc<UserEvent, UserState> {
  private users: User[];
  private userService: UserService;

  constructor(state: DefaultUserState) {
    super(state, new DefaultBlocLogger());
    this.users = state.users;
    this.userService = new UserService();
  }

  get numUsers(): number {
    return this.users.length;
  }

  protected async* mapEventToState(
    event: UserEvent
  ): AsyncIterableIterator<UserState> {
    switch (event.constructor) {
      case AddUser:
        yield* this.addUser(event as AddUser);
        break;
      case DeleteUser:
        yield* this.deleteUser(event as DeleteUser);
        break;
      case UpdateUser:
        yield* this.updateUser(event as UpdateUser);
        break;
    }
  }

  private async* addUser(event: AddUser): AsyncGenerator<UserState> {
    try {
      yield new LoadingState();
      const user = await this.userService.save(event.user);
      this.users = [user, ...this.users];
      yield new LoadedState(this.users);
    } catch (ex) {
      yield new ErrorState(ex);
    }
  }

  private async* deleteUser(event: DeleteUser): AsyncGenerator<UserState> {
    try {
      yield new LoadingState();
      await this.userService.remove(event.id);
      this.users = this.users.filter(user => user.id !== event.id);
      yield new LoadedState(this.users);
    } catch (ex) {
      yield new ErrorState(ex);
    }
  }

  private async* updateUser(event: UpdateUser): AsyncGenerator<UserState> {
    try {
      yield new LoadingState();
      const user = await this.userService.update(event.user);
      this.users = this.updateListUsers(this.users, user);
      yield new LoadedState(this.users);
    } catch (ex) {
      yield new ErrorState(ex);
    }
  }


  private updateListUsers(users: User[], currentUser: User) {
    const index = this.users.findIndex(user => user.id === currentUser.id);
    if (index === -1) {
      return this.users;
    } else {
      this.users.splice(index, 1, currentUser);
      return this.users;
    }
  }
}
