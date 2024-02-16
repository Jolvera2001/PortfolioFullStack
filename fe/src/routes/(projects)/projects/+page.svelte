<script>
    import ExpContainer from "$lib/ExpContainer.svelte";
    import Projects from "$lib/projects.json"
    import Experience from "$lib/experience.json"
    import ProjContainer from "$lib/ProjContainer.svelte";
    import ExpPopup from "$lib/ExpPopup.svelte"
    import ProjPopup from "$lib/ProjPopup.svelte"

    // transition
    function fade(node, { delay = 100, duration = 300 }) {
        return {
            delay,
            duration,
            css: t => `opacity: ${t}`
        };
    }

    // tab section
    let selectedTab = 'experience'; // default tab

    // Function to switch tabs
    function switchTab(tab) {
        selectedTab = tab;
    }

    let selectedProj = null;

    function handleShowPopup(event) {
        selectedProj = event.detail.proj;
    }

</script>

<style>
	/* This style should be in your CSS file */
	.transition-font {
		transition: font-size 0.3s ease-in-out;
	}

    .selected {
        text-decoration: underline;
    }
</style>

<!-- tab selection buttons -->
<div class="flex justify-evenly bg-purpleText text-pastelPurple text-3xl">
    <button class="p-5 transition-font hover:text-4xl"
        class:selected={selectedTab === 'experience' ? 'selected' : ''} 
        on:click={() => switchTab('experience')}>
        Experience
    </button>
    <button class="p-5 my-5 transition-font hover:text-4xl"
        class:selected={selectedTab === 'projects' ? 'selected' : ''}  
        on:click={() => switchTab('projects')}>
        Projects
    </button>
</div>

<!-- tab content -->
{#if selectedTab === 'experience'}
    <div class="bg-purpleText text-pastelPurple">
        <div class="container mx-auto px-20 py-5">
            <div class="grid grid-cols-3 gap-4 m-5 h-screen place-items-start justify-items-center">
                {#each Experience as exp}
                    <ExpContainer {exp} on:showPopUp={handleShowPopup}/>
                {/each}
            </div>
        </div>
    </div>
    
{:else if selectedTab === 'projects'}
    <div class="bg-purpleText text-pastelPurple">
        <div class="container mx-auto px-20 py-5">
            <div class="grid grid-cols-3 gap-4 m-5 h-screen place-items-start justify-items-center">
                {#each Projects as proj}
                    <ProjContainer {proj}/>
                {/each}
            </div>
        </div>
    </div>
{/if}
