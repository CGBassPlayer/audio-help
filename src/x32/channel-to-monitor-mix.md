---
title: Sending a Channel to a Monitor Mix
---

<!-- <script setup>
    import { ref } from 'vue';
    import { channelOptions, busOptions} from './constants.ts';

    // Variables for text
    const channelSelection = ref({name: "your needed channel(s)", findText: "Make sure the channel is displayed on the scribble strips to the right of that button side of the board"});
    const busSelection = ref({name: "your monitor mix", findText: "Make sure the bus is displayed on the scribble strips on the right side of the board"});
</script> -->

# {{ $frontmatter.title }}

> [!WARNING]
> If the monitor mix bus is set to Post Fade, you will need to make sure the fader for sending the channel to the mains is turned up.
<!-- > If the monitor mix bus is set to [Post Fade](./setting-bus-pre-post.md), you will need to make sure the fader for sending the channel to the mains is turned up. -->

<!-- <p>
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
</p> -->

1. Make sure the channel is displayed on the scribble strips to the left of that button side of the board. Press to corrisponding layer to bring it up if it is not.
2. Make sure the bus is displayed on the scribble strips on the right side of the board. Press to corrisponding layer to bring it up if it is not.
3. Select your monitor mix and then press `Sends on Faders`.
4. Move your needed channel(s) fader to the desired level.

> [!IMPORTANT]
> Make sure the monitor fader is turned up! I recommend starting at -5db so you have room when they ask for the whole mix to be turned up during the show.
