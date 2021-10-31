import { User } from "@/screens/UserManagement/Model";
import { RandomUtils } from "@/utils/random.utils";

export class UserService {
  /**
   * fake call api
   * @param user
   * @private
   */
  save(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, RandomUtils.nextInt(500, 2000));
    });
  }

  /**
   * fake call pai
   * @param id: string
   * @private
   */
  remove(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve(void 0);
      }, RandomUtils.nextInt(500, 2000));
    });
  }

  /**
   * fake call pai
   * @param user
   * @private
   */
  update(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, RandomUtils.nextInt(500, 2000));
    });
  }
}
