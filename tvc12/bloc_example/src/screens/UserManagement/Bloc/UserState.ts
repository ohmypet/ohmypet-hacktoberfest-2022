import { User } from "@/screens/UserManagement/Model";

export abstract class UserState {
}


export class LoadingState extends UserState {
}

export class LoadedState extends UserState {
  constructor(readonly users: User[] = []) {
    super();
  }
}

export class DefaultUserState extends LoadedState {
  constructor(users: User[] = []) {
    super(users);
  }
}

export class ErrorState extends UserState {
  constructor(readonly exception: Error) {
    super();
  }

  get message(): string {
    return this.exception.message ?? "Internal error";
  }
}
