<template>
  <div class="user-management">
    <template>
      <div class="header">
        <div class="title">
          <h4>
            <strong>List User</strong>
          </h4>
          <template>
            <h6 v-if="isPlurality">Total {{ numUsers }} users</h6>
            <h6 v-else>Total {{ numUsers }} user</h6>
          </template>
        </div>
        <FlatButton isPrimary title="Add user" @click="handleAddNewUser" />
      </div>
    </template>
    <div class="body">
      <div class="listing">
        <VueBloc :bloc="userBloc" :renderWhen="isLoadedState" class="bloc">
          <template #default="{ state }">
            <UserListing
              :role="Role.Staff"
              :users="state.users"
              @onDelete="handleDeleteUser"
              @onEdit="handleEditUser"
            />
          </template>
        </VueBloc>
        <VueBloc :bloc="userBloc">
          <template #default="{ state }">
            <div v-if="isLoadingState(state)" class="update-background">
              <Loading></Loading>
            </div>
          </template>
        </VueBloc>
      </div>
      <div class="listing">
        <VueBloc :bloc="userBloc" :renderWhen="isLoadedState" class="bloc">
          <template #default="{ state }">
            <UserListing
              :role="Role.Admin"
              :users="state.users"
              @onDelete="handleDeleteUser"
              @onEdit="handleEditUser"
            />
          </template>
        </VueBloc>
        <VueBloc :bloc="userBloc">
          <template #default="{ state }">
            <div v-if="isLoadingState(state)" class="update-background">
              <Loading></Loading>
            </div>
          </template>
        </VueBloc>
      </div>
    </div>
    <UserModal ref="userModal" @onSubmitCreatedUser="handleSubmitCreatedUser" @onSubmitUpdatedUser="handleSubmitUpdatedUser" />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import UserListing from "@/screens/UserManagement/UserListing.vue";
import { Role, User } from "@/screens/UserManagement/Model";
import UserModal from "@/screens/UserManagement/UserModal.vue";
import { UserBloc } from "@/screens/UserManagement/Bloc/UserBloc";
import { DefaultUserState, LoadedState, LoadingState, UserState } from "@/screens/UserManagement/Bloc/UserState";
import { AddUser, DeleteUser, UpdateUser } from "@/screens/UserManagement/Bloc/UserEvent";
import Loading from "@/screens/UserManagement/Loading.vue";

@Component({
  components: { Loading, UserModal, UserListing }
})
export default class UserManagement extends Vue {
  private readonly Role = Role;
  private userBloc: UserBloc;
  @Ref()
  private readonly userModal?: UserModal;

  constructor() {
    super();
    this.userBloc = new UserBloc(
      new DefaultUserState([
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake(),
        User.fake()
      ])
    );
  }

  get numUsers(): number {
    return this.userBloc.numUsers;
  }

  get isPlurality(): boolean {
    return this.numUsers > 1;
  }

  private handleEditUser(user: User): void {
    this.userModal?.showEditMode(user);
  }

  private handleDeleteUser(user: User): void {
    this.userBloc.add(new DeleteUser(user.id));
  }

  private isLoadedState(state: UserState): boolean {
    return state instanceof LoadedState;
  }

  private isLoadingState(state: UserState): boolean {
    return state instanceof LoadingState;
  }

  private handleSubmitUpdatedUser(user: User): void {
    this.userBloc.add(new UpdateUser(user));
  }

  private handleSubmitCreatedUser(user: User): void {
    this.userBloc.add(new AddUser(user));
  }

  private handleAddNewUser(): void {
    this.userModal?.showCreateMode();
  }
}
</script>

<style lang="scss">
.user-management {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: start;
  margin: auto;
  padding: 16px;
  width: 80vw;

  > .header {
    display: flex;
    margin-bottom: 24px;

    > div.btn {
      margin-left: auto;
    }
  }

  > .body {
    display: flex;
    flex-shrink: 1;
    height: 100%;
    justify-content: space-around;
    overflow: hidden;

    > div.listing {
      height: 100%;
      position: relative;
      width: 47%;

      > div.bloc {
        height: 100%;
      }

      .update-background {
        align-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        opacity: 0.2;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
}
</style>
