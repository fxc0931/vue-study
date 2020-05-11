<template>
  <div>
    <x-form :model="model" :rules="rules" :ref="loginForm">
      <x-form-item prop="username" label="用户名">
        <x-input v-model="model.username" placeholder="请输入用户名" />
      </x-form-item>
      <x-form-item prop="password" label="密码">
        <x-input v-model="model.password" placeholder="请输入密码" type="password" />
      </x-form-item>
      <x-form-item>
        <button @click="submitForm(loginForm)">提交</button>
      </x-form-item>
    </x-form>
  </div>
</template>

<script>
import XForm from "./Form";
import XFormItem from "./FormItem";
import XInput from "./Input";

import create from '@/utils/create'
import Notice from '@/components/notice'

export default {
  components: {
    XForm,
    XFormItem,
    XInput
  },
  data() {
    return {
      loginForm: "loginForm",
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          const notice = create(Notice, {
            title: '正确',
            message: '很正确aaaaaaaaa',
            duration: 2000
          })
          notice.show()
        } else {
          console.log("错误");
        }
      });
    }
  }
};
</script>

<style>
</style>