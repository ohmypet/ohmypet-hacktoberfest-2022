import { RandomUtils } from "@/utils/random.utils";
import { Role } from "@/screens/UserManagement/Model/Role";

export class User {
  private static names = ["Vi", "Chí", "Thiện", "Nguyễn", "Duy", "Cương", "Hào", "Nhât", "Huy", "Đức"];

  public constructor(
    public id: string,
    public name: string,
    public roles: Role[]
  ) {
  }

  static default(): User {
    return new User(RandomUtils.nextString(), RandomUtils.nextString(), []);
  }

  static fake() {
    const roles = RandomUtils.nextBool() ? [Role.Admin] : [Role.Admin, Role.Staff];
    return new User(RandomUtils.nextString(), this.getFakeName(), roles);
  }

  private static getFakeName(): string {
    const getName = () => User.names[RandomUtils.nextInt(0, User.names.length - 1)];
    return `${getName()} ${getName()} ${getName()}`;
  }

  public hasRole(role: Role): boolean {
    return this.roles.some((currentRole: Role) => role === currentRole);
  }
}
