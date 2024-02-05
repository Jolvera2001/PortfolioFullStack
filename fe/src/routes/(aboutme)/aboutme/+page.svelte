<script>
    import ShapeBoxAboutMe from "$lib/ShapeBoxAboutMe.svelte";
    import LinkedIn from '~icons/mdi/linkedin'
    import Github from '~icons/mdi/github'
</script>

<div class="bg-pastelRed">
    <div class="container mx-auto px-4 flex">
        <ShapeBoxAboutMe />
    
        <div class="w-3/4 flex flex-col text-redText">
            <div class="flex flex-col justify-center items-center text-4xl p-5">
                <h1>
                    Contact Info
                </h1>
                <p class="text-2xl p-3">
                    <b>jolvera6@stedwards.edu</b>
                </p>
                <div class="flex text-5xl p-3">
                    <a href="https://www.linkedin.com/in/johan-olvera/" class="pr-3"><LinkedIn /></a>
                    <a href="https://github.com/Jolvera2001" class='pl-3'><Github /></a>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center text-4xl p-5">
                <h2>
                    Who am I?
                </h2>
            </div>
        </div>
    </div>
</div>