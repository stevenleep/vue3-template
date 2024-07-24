<template>
  <div>
    <ElForm :model="state" size="default" status-icon :rules="loginRules">
      <ElFormItem label="手机号" prop="phone">
        <ElInput v-model="state.phone" type="tel" name="phone" placeholder="(+86) Phone number" />
      </ElFormItem>
      <ElFormItem label="验证码" prop="code">
        <ElInput v-model="state.code" type="text" name="code" placeholder="code" />
        <ElButton size="small" @click="getCode(state.code)">Get Code</ElButton>
      </ElFormItem>
      <ElFormItem>
        <ElButton :loading="isLoading" type="primary" @click.stop="startLogin">
          Start enjoying.
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElForm, ElFormItem, ElButton, ElNotification } from "element-plus";
import { getCode, login } from "../service";

const state = reactive({ phone: "", code: "" });
const isLoading = ref(false);

const loginRules = {
  phone: [{ required: true, message: "Please input your phone number", trigger: "blur" }],
  code: [{ required: true, message: "Please input your code", trigger: "blur" }],
};

async function startLogin() {
  isLoading.value = true;
  const loginRes = await login(state.phone, state.code);
  ElNotification(
    loginRes
      ? { title: "Login Success", message: "Welcome to the world.", type: "success" }
      : {
          title: "Login Failed",
          message: "Please check your phone number and code.",
          type: "error",
        },
  );
  isLoading.value = false;
}
</script>

<style scoped lang="less">
form {
  .form-item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 10px;

    label {
      text-align: right;
    }

    .code-btn {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      outline: none;
      cursor: pointer;
      margin-left: 5px;
    }

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.5rem;
    }
  }

  button[type="submit"] {
    width: 150px;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
  }
}
</style>
