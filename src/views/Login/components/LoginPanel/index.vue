<template>
  <section class="login-panel-container">
    <h1>Admin Login</h1>

    <ElForm
      ref="loginForm"
      label-position="top"
      label-width="0"
      :model="loginModel"
      :rules="loginRulesReactivitySchema"
    >
      <FormTraversal :sources="(loginSchema as any)" keys="field">
        <!-- TODO: 使用FormTable FormItemRenderer 替换  -->
        <template #traversal="{ value }: { value: FieldItem }">
          <ElFormItem :label="value.label" :prop="value.field" class="extend-form-item">
            <ElInput
              v-model="loginModel[value.field]"
              :type="value.type"
              :placeholder="value.placeholder"
              clearable
            />
          </ElFormItem>
        </template>
      </FormTraversal>
      <ElFormItem class="extend-form-item submit-login-btn">
        <ElButton type="primary" @click="login">登录</ElButton>
      </ElFormItem>
    </ElForm>
  </section>
</template>

<script setup lang="ts">
import { router } from "@/router";
import { ElForm, ElFormItem } from "element-plus";
import { loginRulesReactivitySchema, loginModel, loginSchema, FieldItem } from "./login";
import { CreateSupportedGenericTraversal } from "@/components/Traversal/GenericTraversal";
import { Paths } from "@/config";

const FormTraversal = CreateSupportedGenericTraversal<FieldItem>();

function login() {
  router.push(Paths.Index);
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variable.module.scss";
.login-panel-container {
  h1 {
    margin-bottom: $padding-xl;
  }
  .extend-form-item {
    margin-bottom: $padding-xl;
  }
  .submit-login-btn {
    margin-top: $padding-base * 4;
  }
}
</style>
