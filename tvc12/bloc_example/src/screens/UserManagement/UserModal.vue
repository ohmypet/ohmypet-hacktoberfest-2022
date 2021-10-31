<template>
  <BModal
    ref="modal"
    :title="modelTitle"
    centered
    class="user-modal"
    size="md"
    static
  >
    <template #default>
      <div class="user-name">
        <div class="d-flex flex-column">
          <label for="user-name">Full name <span>*</span></label>
          <input id="user-name" v-model="name" />
        </div>
        <h6 v-if="!$v.name.required" class="error">Field is required</h6>
      </div>
      <div class="user-role">
        <label for="role">Roles <span>*</span></label>
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="role"
            v-model="roles"
            :aria-describedby="ariaDescribedby"
            name="flavour-2"
          >
            <b-form-checkbox :value="Role.Staff">Staff</b-form-checkbox>
            <b-form-checkbox :value="Role.Admin">Admin</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <h6 v-if="!$v.roles.required" class="error">
          User must be at least one role
        </h6>
      </div>
    </template>
    <template #modal-footer="{ hide }">
      <div class="btn-bar">
        <template v-if="mode === UserModalMode.Edit">
          <FlatButton
            isPrimary
            title="Update"
            @click.prevent="handleSubmitUser"
          ></FlatButton>
        </template>
        <template v-if="mode === UserModalMode.Create">
          <FlatButton
            isPrimary
            title="Create"
            @click.prevent="handleSubmitUser"
          ></FlatButton>
        </template>
        <FlatButton title="Cancel" @click.prevent="hide"></FlatButton>
      </div>
    </template>
  </BModal>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { Role, User } from "@/screens/UserManagement/Model";
import { BModal } from "bootstrap-vue";
import { required } from "vuelidate/lib/validators";

enum UserModalMode {
  Edit = "edit",
  Create = "create",
}

@Component({
  validations: {
    name: {
      required
    },
    roles: {
      required
    }
  }
})
export default class UserModal extends Vue {
  private readonly UserModalMode = UserModalMode;
  private readonly Role = Role;
  private mode = UserModalMode.Edit;
  private user?: User | null;
  private name = "";
  private roles = [Role.Staff];
  @Ref()
  private modal?: BModal;

  private get modelTitle(): string {
    switch (this.mode) {
      case UserModalMode.Create:
        return "Create User";
      default:
        return "Edit User";
    }
  }

  showCreateMode(): void {
    this.mode = UserModalMode.Create;
    this.prepareModal();
    this.show();
  }

  showEditMode(user: User): void {
    this.mode = UserModalMode.Edit;
    this.prepareModal(user);
    this.show();
  }

  private prepareModal(user?: User | null): void {
    this.$v.$reset();
    if (user) {
      this.user = user;
      this.name = user.name;
      this.roles = user.roles;
    } else {
      this.name = "";
      this.roles = [Role.Staff];
    }
  }

  private handleSubmitUser(): void {
    if (this.validate()) {
      const user = this.getUser();
      this.emitSubmitUser(user);
      this.hide();
    }
  }

  private validate(): boolean {
    this.$v.$touch();
    return !this.$v.$invalid;
  }

  private hide(): void {
    if (this.modal) {
      this.modal.hide();
      this.$v.$reset();
    }
  }

  private show(): void {
    if (this.modal) {
      this.modal.show();
    }
  }

  private getUser() {
    const user = User.default();
    if (this.user) {
      user.id = this.user.id;
    }
    user.name = this.name;
    user.roles = this.roles;
    return user;
  }

  private emitSubmitUser(user: User) {
    switch (this.mode) {
      case UserModalMode.Create:
        this.$emit("onSubmitCreatedUser", user);
        break;
      case UserModalMode.Edit:
        this.$emit("onSubmitUpdatedUser", user);
        break;
    }
  }
}
</script>

<style lang="scss">
.user-modal {
  .modal-backdrop {
    background-color: rgba(43, 43, 43, 0.45);
  }

  .modal-content {
    h6.error {
      color: red;
      margin-top: 4px;
    }

    .user-name + .user-role {
      margin-top: 8px;
    }

    .user-role {
      .form-group {
        margin-bottom: 0px;
      }
    }

    label span {
      color: red;
    }
  }

  div.btn-bar {
    display: flex;
    flex-direction: row;

    > div + div {
      margin-left: 12px;
    }
  }
}
</style>
