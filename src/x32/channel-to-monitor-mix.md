---
title: Sending a Channel to a Monitor Mix
---

<script setup>
    import { ref } from 'vue';

    const channelOptions = ref([
        {text: "Channel 1", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Channel 2", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 2 will be the second fader to the right of that button"},
        {text: "Channel 3", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 3 will be the third fader to the right of that button"},
        {text: "Channel 4", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 4 will be the fourth fader to the right of that button"},
        {text: "Channel 5", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 5 will be the fifth fader to the right of that button"},
        {text: "Channel 6", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 6 will be the sixth fader to the right of that button"},
        {text: "Channel 7", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 7 will be the seventh fader to the right of that button"},
        {text: "Channel 8", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 8 will be the eighth fader to the right of that button"},
        {text: "Channel 9", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 9 will be the eighth fader to the left of the center column of buttons"},
        {text: "Channel 10", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 10 will be the seventh fader to the left of the center column of buttons"},
        {text: "Channel 11", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 11 will be the sixth fader to the left of the center column of buttons"},
        {text: "Channel 12", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 12 will be the fifth fader to the left of the center column of buttons"},
        {text: "Channel 13", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 13 will be the fourth fader to the left of the center column of buttons"},
        {text: "Channel 14", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 14 will be the third fader to the left of the center column of buttons"},
        {text: "Channel 15", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 15 will be the second fader to the left of the center column of buttons"},
        {text: "Channel 16", findText: "Press the CH 1-16 Button near the bottom left of the console and Channel 16 will be the first fader to the left of the center column of buttons"},
        {text: "Channel 17", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 17 will be the first fader to the right of that button"},
        {text: "Channel 18", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 18 will be the second fader to the right of that button"},
        {text: "Channel 19", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 19 will be the third fader to the right of that button"},
        {text: "Channel 20", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 20 will be the fourth fader to the right of that button"},
        {text: "Channel 21", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 21 will be the fifth fader to the right of that button"},
        {text: "Channel 22", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 22 will be the sixth fader to the right of that button"},
        {text: "Channel 23", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 23 will be the seventh fader to the right of that button"},
        {text: "Channel 24", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 24 will be the eighth fader to the right of that button"},
        {text: "Channel 25", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 25 will be the eighth fader to the left of the center column of buttons"},
        {text: "Channel 26", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 26 will be the seventh fader to the left of the center column of buttons"},
        {text: "Channel 27", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 27 will be the sixth fader to the left of the center column of buttons"},
        {text: "Channel 28", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 28 will be the fifth fader to the left of the center column of buttons"},
        {text: "Channel 29", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 29 will be the fourth fader to the left of the center column of buttons"},
        {text: "Channel 30", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 30 will be the third fader to the left of the center column of buttons"},
        {text: "Channel 31", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 31 will be the second fader to the left of the center column of buttons"},
        {text: "Channel 32", findText: "Press the CH 17-32 Button near the bottom left of the console and Channel 32 will be the first fader to the left of the center column of buttons"},
        {text: "Aux In 1", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Aux In 2", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Aux In 3", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Aux In 4", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Aux In 5", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "Aux In 6", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "FX Return 1", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "FX Return 2", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "FX Return 3", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"},
        {text: "FX Return 4", findText: "Press the AUX IN / USB FX RETURNS Button near the bottom left of the console and Channel 1 will be the first fader to the right of that button"}
    ]);
    const busOptions = ref([
        {text: "MixBus 1", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the first fader to the right of that button"},
        {text: "MixBus 2", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the second fader to the right of that button"},
        {text: "MixBus 3", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the third fader to the right of that button"},
        {text: "MixBus 4", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the fourth fader to the right of that button"},
        {text: "MixBus 5", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the fifth fader to the right of that button"},
        {text: "MixBus 6", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the sixth fader to the right of that button"},
        {text: "MixBus 7", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the seventh fader to the right of that button"},
        {text: "MixBus 8", findText: "Press the BUS 1-8 button in the middle of the board between the faders and press Select the eighth fader to the right of that button"},
        {text: "MixBus 9", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the first fader to the right of that button"},
        {text: "MixBus 10", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the second fader to the right of that button"},
        {text: "MixBus 11", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the third fader to the right of that button"},
        {text: "MixBus 12", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the fourth fader to the right of that button"},
        {text: "MixBus 13", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the fifth fader to the right of that button"},
        {text: "MixBus 14", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the sixth fader to the right of that button"},
        {text: "MixBus 15", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the seventh fader to the right of that button"},
        {text: "MixBus 16", findText: "Press the BUS 9-16 button in the middle of the board between the faders and press Select the eighth fader to the right of that button"}
    ]);

    // Variables for text
    const channelSelection = ref({text: "your needed channel(s)", findText: "Make sure the channel is displayed on the scribble strips to the right of that button side of the board"});
    const busSelection = ref({text: "your monitor mix", findText: "Make sure the bus is displayed on the scribble strips on the right side of the board"});
</script>

# Sending a Channel to a Monitor Mix

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

1. {{ channelSelection.findText}}.
2. {{ busSelection.findText }}.
3. Select {{ busSelection.text }} and then press *Sends on Faders*
4. Move {{ channelSelection.text }} fader to the desired level
