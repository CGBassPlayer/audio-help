---
title: Sending a Channel to a Monitor Mix
---

<script setup>
    import { ref } from 'vue';

    const channelOptions = ref([
        {text: "Channel 1", findText: "Press the `CH1-16` Button near the bottom left of the console and Channel 1 will be the first fader on the left."},
        {text: "Channel 2"},
        {text: "Channel 3"},
        {text: "Channel 4"},
        {text: "Channel 5"},
        {text: "Channel 6"},
        {text: "Channel 7"},
        {text: "Channel 8"},
        {text: "Channel 9"},
        {text: "Channel 10"},
        {text: "Channel 11"},
        {text: "Channel 12"},
        {text: "Channel 13"},
        {text: "Channel 14"},
        {text: "Channel 15"},
        {text: "Channel 16"},
        {text: "Channel 17"},
        {text: "Channel 18"},
        {text: "Channel 19"},
        {text: "Channel 20"},
        {text: "Channel 21"},
        {text: "Channel 22"},
        {text: "Channel 23"},
        {text: "Channel 24"},
        {text: "Channel 25"},
        {text: "Channel 26"},
        {text: "Channel 27"},
        {text: "Channel 28"},
        {text: "Channel 29"},
        {text: "Channel 30"},
        {text: "Channel 31"},
        {text: "Channel 32"},
        {text: "Aux In 1"},
        {text: "Aux In 2"},
        {text: "Aux In 3"},
        {text: "Aux In 4"},
        {text: "Aux In 5"},
        {text: "Aux In 6"},
        {text: "FX Return 1"},
        {text: "FX Return 2"},
        {text: "FX Return 3"},
        {text: "FX Return 4"},
    ]);
    const busOptions = ref([
        {text: "MixBus 1"},
        {text: "MixBus 2"},
        {text: "MixBus 3"},
        {text: "MixBus 4"},
        {text: "MixBus 5"},
        {text: "MixBus 6"},
        {text: "MixBus 7"},
        {text: "MixBus 8"},
        {text: "MixBus 9"},
        {text: "MixBus 10"},
        {text: "MixBus 11"},
        {text: "MixBus 12"},
        {text: "MixBus 13"},
        {text: "MixBus 14"},
        {text: "MixBus 15"},
        {text: "MixBus 16"}
    ]);

    
    // Variables for text
    const channelSelection = ref({text: "your needed channel(s)"});
    const busSelection = ref({text: "your monitor mix"});
</script>

# Sending a Channel to a Monitor Mix

---

<p>
    What Channels?
    <select v-model="channelSelection">
        <option disabled value="your needed channel(s)">Channel Selection</option>
        <option v-for="option in channelOptions" :value="option">
        {{ option.text }}
        </option>
  </select>
</p>
<p>
    What Monitor/Bus Mix?
    <select v-model="busSelection">
        <option disabled value="your monitor mix">MixBus Selection</option>
        <option v-for="option in busOptions" :value="option">
        {{ option.text }}
        </option>
  </select>
</p>

---

1. {{channelSelection.findText}}
2. Select {{ busSelection.text }} and then press *Sends on Faders*
3. Move {{ channelSelection.text }} fader to the desired level
