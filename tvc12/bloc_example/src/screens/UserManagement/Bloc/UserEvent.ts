import { User } from "@/screens/UserManagement/Model";

export abstract class UserEvent {
}

export class AddUser extends UserEvent {
  constructor(readonly user: User) {
    super();
  }
}

export class DeleteUser extends UserEvent {
  constructor(readonly id: string) {
    super();
  }
}

export class UpdateUser extends UserEvent {
  constructor(readonly user: User) {
    super();
  }
}
