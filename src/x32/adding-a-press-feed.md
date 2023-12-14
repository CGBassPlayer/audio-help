---
title: Adding a Press Feed
---

<script setup>
  import { ref } from 'vue';

  const selectedMatrix = ref('your desired matrix');
  const matrixOptions = ref([
    {text: "Matrix 1", value: "Matrix 1"},
    {text: "Matrix 2", value: "Matrix 2"},
    {text: "Matrix 3", value: "Matrix 3"},
    {text: "Matrix 4", value: "Matrix 4"},
    {text: "Matrix 5", value: "Matrix 5"},
    {text: "Matrix 6", value: "Matrix 6"}
  ]);
</script>

# Adding a Press Feed

If the camera man is walking up to you 5 minutes before a show and asking "Can I get a line out?" you should probably tell then no. But incase you have to, here is how.

::: warning
This guide assumes the v4 firmware is being used. If you are the v3 firmware, check out the manual.
:::

## The Simple Way

::: tip
Use this method if you don't know what a Matrix is.
:::

1. Press the Routing Button next to the screen.
2. Press the right arrow to change the currently viewed tab to `OUTPUT`.
3. Use the left most encoder to change to an output you are you not already using.
4. Using the third encoder from the left, select the MAIN L/R and click the encoder to select it.

## The (Slightly) Complicated Way

::: tip
Recommended if you are already using Matrices for your other outputs
:::

<p>
  What Matrix are you using?
  <select v-model="selectedMatrix">
    <option disabled value="">Matrix Selection</option>
    <option v-for="option in matrixOptions" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</p>

1. Press the Routing Button next to the screen.
2. Press the right arrow to change the currently viewed tab to `OUTPUT`.
3. Use the left most encoder to change to an output you are you not already using.
4. Using the third encoder from the left, select {{ selectedMatrix }} and click the encoder to select it.
5. Press the `MATRIX 1-6 MAIN C` button (bottom button in the column between the 2 banks of faders).
6. With that bank of faders selected, Select the Main LR and then press `SENDS ON FADERS` so it is flashing at you.
7. Turn up the {{ selectedMatrix }} in the routing to -6db
8. Press `SENDS ON FADERS` again to exit.
9. Turn up {{ selectedMatrix }} to 0db.
10. Verify with the person connected that they are getting a signal from you.
