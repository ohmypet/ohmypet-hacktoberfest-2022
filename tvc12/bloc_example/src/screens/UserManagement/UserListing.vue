<template>
  <div class="user-listing-panel">
    <div class="header">
      <h5>
        <strong>{{ title }} ({{ currentUsers.length }})</strong>
      </h5>
    </div>
    <div class="body">
      <template v-for="user in currentUsers">
        <template>
          <div :key="user.id" class="user-item">
            <h5>
              <strong>ID: {{ user.id }}</strong>
            </h5>
            <h4>
              <strong>{{ user.name }}</strong>
            </h4>
            <div class="btn-bar">
              <LinkButton title="Edit" @click.prevent="emitEdit(user)"></LinkButton>
              <LinkButton title="Delete" @click.prevent="emitDelete(user)"></LinkButton>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Emit, Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Role, User } from "@/screens/UserManagement/Model";

@Component
export default class UserListing extends Vue {
  @Prop({ required: true, type: Array })
  private readonly users!: User[];

  @Prop({ required: true, type: String })
  private readonly role!: Role;

  private get title(): string {
    switch (this.role) {
      case Role.Admin:
        return "Admin";
      default:
        return "Staff";
    }
  }

  private get currentUsers(): User[] {
    return this.users.filter((user: User) => user.hasRole(this.role));
  }

  @Emit("onEdit")
  private emitEdit(user: User): User {
    return user;
  }

  @Emit("onDelete")
  private emitDelete(user: User): User {
    return user;
  }
}
</script>

<style lang="scss">
.user-listing-panel {
  height: 100%;
  border: 1px solid #2b2b2b;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  padding: 16px;

  > .header {
    margin-bottom: 12px;
  }

  > .body {
    flex-shrink: 1;
    overflow: auto;

    > .user-item + .user-item {
      margin-top: 16px;
    }

    > .user-item {
      background-color: rgba(128, 128, 128, 0.2);
      border-radius: 4px;
      padding: 16px;

      > * + * {
        margin-top: 8px;
      }

      .btn-bar {
        > div + div {
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
