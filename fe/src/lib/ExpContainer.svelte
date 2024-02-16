<script>
    import { createEventDispatcher } from "svelte";
    export let exp;

    const dispatch = createEventDispatcher();

    function showPopUp() {
        dispatch('showPopUpExp', { exp });
    }
</script>
<div class="w-44 h-60 text-center" on:click={showPopUp}>
    <div class="border-4 rounded-xl border-solid w-44 h-60" />
    <h1 class="text-2xl">{exp.title}</h1>
</div>