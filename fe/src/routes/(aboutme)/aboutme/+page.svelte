<script>
    import ShapeBoxAboutMe from "$lib/ShapeBoxAboutMe.svelte";
    import LinkedIn from "~icons/mdi/linkedin";
    import Github from "~icons/mdi/github";
</script>

<div class="bg-pastelRed">
    <div class="container mx-auto px-4 flex">
        <ShapeBoxAboutMe />

        <div class="w-3/4 flex flex-col text-redText">
            <div
                class="flex flex-col justify-center items-center text-4xl p-1 text-center">
                <h1>Who am I?</h1>
                <p class="text-2xl pt-5">
                    I am current a college student nearing graduation and have
                    been continuously learning more about the software
                    development process. After an internship during the summer,
                    it drove me to learn more about different technologies. I'm
                    working more with C# and frameworks like ASP.Net Core and
                    look forward to working with something like Blazor, but I'm
                    looking at other languages like Rust and PHP out of
                    curiosity. I'm heavily interested in backend development but
                    pretty open to other areas of the stack. I need to work more
                    on databases.
                </p>
                <div class="flex justify-center items-baseline mx-auto pl-10 pt-5">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-medium">Current Projects</h1>
                        <ul class="text-xl list-disc text-left">
                            <li>Goat Places</li>
                            <li>Room World</li>
                            <li>Portfolio Site (this one!)</li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-center items-center text-4xl p-5 text-center">
                        <h1 class="text-2xl font-medium">Contact</h1>
                        <p class="text-xl p-3">
                            <b>jolvera6@stedwards.edu</b>
                        </p>
                        <div class="flex text-5xl p-3">
                            <a
                                href="https://www.linkedin.com/in/johan-olvera/"
                                class="pr-3"><LinkedIn /></a
                            >
                            <a href="https://github.com/Jolvera2001" class="pl-3"
                                ><Github /></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
