<template>
  <main id="main">
    <h1>Age Calculator</h1>

    <FeatureWrapper feature-key="calculateuseragefeature">

      <div>
        <p class="text">Calculate your age by providing your year of birth.</p>
        <input type='number' v-model='appData.birthYear' />
        <button class='button button-calculate' @click='calculateUserAge()' :disabled="!isYearValid">
          Calculate
        </button>

        <p v-if="appData.age">You are {{ appData.age }} years old!</p>

        <p v-else>Enter your year of birth above and press calculate!</p>
      </div>

      <template #else>
        Sorry, This feature has been disabled by the Admin.
      </template>

      <template #loading>
        <p>Loading...</p>
      </template>

    </FeatureWrapper>

  </main>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { FeatureWrapper } from 'configcat-vue';

const appData = reactive({
  birthYear: '',
  age: '',
});

const yearRegex = /^(?:19|20)\d{2}$/;

const calculateUserAge = () => {
  const userAge = new Date().getFullYear() - Number(appData.birthYear);
  appData.age = userAge.toString();
  appData.birthYear = '';
}

const isYearValid = computed((): boolean => {
  return yearRegex.test(appData.birthYear);
})

</script>

<style scoped>
#main {
  text-align: center;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: rgb(238 242 255);
}

.button {
  color: black;
  background-color: orange;
  border: none;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
}

.button:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.button:focus-visible,
input:focus-visible {
  outline: none;
}

.button:disabled {
  cursor: not-allowed;
  background-color: lightgray;
  color: darkgray;
}

.button-calculate {
  padding: 10px 25px;
  margin-left: 8px;
  border-radius: 8px;
}

input {
  padding: 10px 25px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
}

.text {
  font-size: 1.5em;
  color: #FFF;
}
</style>
