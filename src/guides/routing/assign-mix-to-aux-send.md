---
title: Assign Mix to Aux Sends
---

<script setup>
  import { ref } from 'vue'

  const selectedAux = ref('your desired aux')
  const auxOptions = ref([
    {text: "Aux 1", value: "Aux 1"},
    {text: "Aux 2", value: "Aux 2"},
    {text: "Aux 3", value: "Aux 3"},
    {text: "Aux 4", value: "Aux 4"},
    {text: "Aux 5", value: "Aux 5"},
    {text: "Aux 6", value: "Aux 6"}
  ])
</script>

# Assign Mix to Aux Sends

<p>
  What Aux are you using?
  <select v-model="selectedAux">
    <option disabled value="">Aux Selection</option>
    <option v-for="option in auxOptions" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</p>
::: warning
This guide assumes the v4 firmware is being used. If you are the v3 firmware, check out the manual.
:::

1. Press the Routing Button next to the screen
2. Press the right arrow to change the currently viewed tab to `AUX OUT`. It is not on the screen by default, keep
   pressing right until it appears.
3. Once on the `AUX OUT` tab, use Encoder 1 (the furthest encoder to the left) to change to {{ selectedAux }}
4. Use Encoder 3 to change the 'mix' or source that will be assigned to {{ selectedAux }}. Make sure to press on Encoder 3
   to confirm the selection.

<style>
  
</style>