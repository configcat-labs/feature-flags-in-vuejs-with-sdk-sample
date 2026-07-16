<template>
  <main id="main">
    <h1>Age Calculator</h1>

    <FeatureWrapper feature-key="calculateUserAge">
      <div>
        <p class="text">Calculate your age by providing your birth year.</p>
        <input type="number" v-model="appData.birthYear" />
        <button class="button button-calculate" @click="calculateUserAge()" :disabled="!isYearValid">
          Calculate
        </button>

        <p v-if="appData.age">You are {{ appData.age }} years old!</p>

        <p v-else>Enter your year of birth above and press calculate!</p>
      </div>

      <template #else>
        Sorry, this feature is disabled by the Admin.
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
  birthYear: 0,
  age: 0,
});

const currentYear = new Date().getFullYear();

const isYearValid = computed((): boolean => {
  return (
    appData.birthYear >= 1900 &&
    appData.birthYear < currentYear
  );
});

const calculateUserAge = () => {
  if (isYearValid.value) {
    const userAge = currentYear - appData.birthYear;
    appData.age = userAge
    appData.birthYear = 0;
  }
}
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