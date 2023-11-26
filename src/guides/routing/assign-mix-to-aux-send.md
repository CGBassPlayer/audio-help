---
title: Assign Mix to Aux Sends
---

<script setup>
// TODO: Get value of Dropdown to update this field
const selectedAux = "your desired aux";
</script>

# Assign Mix to Aux Sends

[//]: # (<label for="aux">Which Aux do you need to work with?</label>)
[//]: # (<select id="aux" name="aux" @change="updateAux&#40;$event&#41;">)
[//]: # (  <option value="1">Aux 1</option>)
[//]: # (  <option value="2">Aux 2</option>)
[//]: # (  <option value="3">Aux 3</option>)
[//]: # (  <option value="4">Aux 4</option>)
[//]: # (  <option value="5">Aux 5</option>)
[//]: # (  <option value="6">Aux 6</option>)
[//]: # (</select>)

::: warning
This guide assumes the v4 firmware is being used. If you are the v3 firmware, check out the manual.
:::

1. Press the Routing Button next to the screen
2. Press the right arrow to change the currently viewed tab to `AUX OUT`. It is not on the screen by default, keep
   pressing right until it appears.
3. Once on the `AUX OUT` tab, use Encoder 1 (the furthest encoder to the left) to change to {{ selectedAux }}
4. Use Encoder 3 to change the 'mix' or source that will be assigned to {{ selectedAux }}. Make sure to press on Encoder 3
   to confirm the selection.
