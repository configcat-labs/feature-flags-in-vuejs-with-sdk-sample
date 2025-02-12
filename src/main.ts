import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ConfigCatPlugin, PollingMode } from 'configcat-vue'

const app = createApp(App);

app.use(ConfigCatPlugin, {
  sdkKey: "YOUR-CONFIGCAT-SDK-KEY",
  pollingMode: PollingMode.AutoPoll, // Optional. Default is AutoPoll
  clientOptions: {
    pollIntervalSeconds: 5 // Optional. Specify the polling interval in seconds. The default is 60 seconds.
  }
})

app.mount('#app')
