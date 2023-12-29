---
title: Sending a Channel to a Monitor Mix
---

<script setup>
    import { ref } from 'vue';
    import { channelOptions, busOptions} from './constants.ts';

    // Variables for text
    const channelSelection = ref({name: "your needed channel(s)", findText: "Make sure the channel is displayed on the scribble strips to the right of that button side of the board"});
    const busSelection = ref({name: "your monitor mix", findText: "Make sure the bus is displayed on the scribble strips on the right side of the board"});
</script>

# Sending a Channel to a Monitor Mix

<p>
    What Channels?
    <select v-model="channelSelection">
        <option disabled value="your needed channel(s)">Channel Selection</option>
        <option v-for="option in channelOptions" :value="option">
        {{ option.name }}
        </option>
  </select>
</p>
<p>
    What Monitor/Bus Mix?
    <select v-model="busSelection">
        <option disabled value="your monitor mix">MixBus Selection</option>
        <option v-for="option in busOptions" :value="option">
        {{ option.name }}
        </option>
  </select>
</p>

---

1. {{ channelSelection.findText}}.
2. {{ busSelection.findText }}.
3. Select {{ busSelection.name }} and then press *Sends on Faders*
4. Move {{ channelSelection.name }} fader to the desired level
