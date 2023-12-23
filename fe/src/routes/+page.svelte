<script>
 import {goto} from '$app/navigation'
 import ShapeBox from "$lib/ShapeBox.svelte";

 function navToProjects() {
     goto('/projects')
 }

</script>

<div class="z-10 relative">
    <!-- Hero Section and background Image-->
    <div class="relative bg-pastelGreen">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between p-32">
                <div class="w-full md:w-1/2 text-greenText">
                    <h1 class="font-bold text-9xl">Hi.</h1>
                    <h2 class="font-light text-9xl">I'm Johan</h2>
                </div>
                <div class="w-full md:w-1/2">
                    <!-- <ShapeBox /> -->
                </div>
            </div>
        </div>
    </div>

    <!-- about me -->
    <!-- Two sections within the same row -->
    <div class="text-lg bg-pastelRed">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between p-32">
                <div class="w-full md:w-1/2">
                    <!-- some sort of SVG or Physics thingy here -->
                </div>
                <div class="w-full md:w-1/2 text-redText">
                    <h1 class="text-6xl font-bold leading-tight p-5">Who Am I?</h1>
                    <p class="text-4xl font-light leading-normal p-5">
                        I am an aspiring Software Developer currently in college. This is my site to showcase my work!
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Experiences and Projects -->
    <div class="text-lg bg-pastelPurple">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between p-32">
            <div class="w-full md:w-1/2 text-purpleText">
                <h1 class="text-5xl font-bold leading-tight p-5">What Have I Done So Far?</h1>
                <p class="text-3xl font-light leading-normal p-5">
                    I've created a few projects where I've gotten experience ranging from mobile development 
                    to full stack web development.
                </p>
                <!-- button to lead to project page -->
                <div class="w-full md:w-1/2">
                    <button class="bg-purpleButtonColor text-gray-300 font-bold py-2 px-4 rounded-sm transition transform hover:bg-purpleHover" on:click={navToProjects}>
                        Take a look at my projects
                    </button>
                </div>
            </div>
            <div class="w-full md:w-3/6">
               
            </div>
        </div>
    </div>
</div>

