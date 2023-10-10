<template>
<div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const username = ref<string>('')
const password = ref<string>('')

const login = () => {
  if (username.value === 'admin' && password.value === 'vaaan@123') {
    router.push('/common-section');
  } else {
    alert('Invalid credentials. Please try again.')
  }
}
</script>
