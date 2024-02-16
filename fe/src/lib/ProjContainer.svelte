<script>
    import { createEventDispatcher } from "svelte";
    export let proj;

    const dispatch = createEventDispatcher();

    function showPopUp() {
        dispatch('showPopUpProj', { proj });
    }
</script>
<div class="w-44 h-60 text-center" on:click={showPopUp}>
    <div class="border-4 rounded-xl border-solid w-44 h-60" />
    <h1 class="text-2xl">{proj.title}</h1>
</div>