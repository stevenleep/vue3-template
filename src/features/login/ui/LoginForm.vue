<template>
  <div>
    <form>
      <div class="form-item">
        <label for="phone">Phone</label>
        <input id="phone" v-model="state.phone" type="tel" name="phone" />
      </div>

      <div class="form-item">
        <label for="code">Code</label>
        <div>
          <input id="code" v-model="state.code" type="text" name="code" />
          <button type="button" class="code-btn" @click="getCode(state.code)">Get Code</button>
        </div>
      </div>
      <button type="submit" @click.prevent="login(state.phone, state.code)">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getCode, login } from "../service";

const state = reactive({
  phone: "",
  code: "",
});
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
