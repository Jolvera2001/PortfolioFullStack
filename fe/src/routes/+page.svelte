<script>
 import {goto} from '$app/navigation'
    function navToProjects() {
        goto('/projects')
    }
</script>
<!-- Hero Section and background Image-->
<div class="relative">
    <!-- background image -->
    <!-- <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/mainBuilding.jpg')"></div> -->

    <!-- overlay -->
    <div class="container mx-auto text-lg">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between p-32 m-10">
            <div class="w-full md:w-1/2">
                <h1 class="text-4xl font-bold leading-tight mb-4">Welcome to
                    <span class="text-blue-500">My Portfolio Site</span></h1>
                <h2 class="text-2xl mb-4 font-light">My name is <span class="text-blue-500">Johan</span></h2>
                <p class="text-gray-600 mb-8"> And This site was made using Svelte kit and Tailwind CSS.
                Here I'll show you what experiences and projects I've done, some info about me, and my contact info for any feedback or outreach.</p>
            </div>
        </div>
    </div>
</div>

<!-- about me -->
<!-- Two sections within the same row -->
<div class="bg-gray-200 text-lg">
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between py-12 p-32 m-10">
            <div class="w-full md:w-1/2 bg-cover">
                <!-- image of myself -->
<!--                <img src="/JolveraRedDoor.jpg" alt="me" class="w-72 rounded-2xl mx-auto mb-8 object-contain">-->
            </div>
            <div class="w-full md:w-1/2">
                <h1 class="text-4xl font-bold leading-tight mb-6">About Me</h1>
                <p class="text-gray-600 mb-8">I'm currently a student at St. Edward's University pursing a bachelor's in Computer Science.
                    I'm a senior and will be graduating in December of 2024. I'm currently seeking employment and other
                opportunities to start a career in Software Engineering. I'm constantly learning new frameworks and tools that
                can be used to develop different kinds of applications, but I'm also excited to come up with more projects
                in order to gain more experience.</p>
            </div>
        </div>
    </div>
</div>

<!-- Experiences and Projects -->
<div class="container mx-auto text-lg m-10 relative">
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between py-12 p-32 -z-50">
        <div class="w-full md:w-3/6 p-15 z-20">
            <h1 class="text-4xl font-bold leading-tight mb-6">Experiences and Projects</h1>
            <p class="text-gray-600 mb-8">I've gone through multiple projects, one in an Internship and the others
            as college projects. My project at my internship introduced me to desktop application development as well as
            giving me exposure to working with a professional team at a company. My two other projects have given me experience
            in working with mobile app development and full stack web development with both using cloud services like Firebase
            and Azure.</p>
            <!-- button to lead to project page -->
            <div class="w-full md:w-3/6 p-15">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-sm transition transform hover:bg-blue-700" on:click={navToProjects}>
                    Take a look at my projects
                </button>
            </div>
        </div>
        <div class="w-full md:w-3/6">
           <!-- Different programming Logos -->
            <div class="flex flex-wrap justify-center p-20">
                <div class="w-1/3 p-10">
                    <img src="/c-sharp.png" alt="csharp" class="object-contain">
                </div>
                <div class="w-1/3 p-10">
                    <img src="/physics.png" alt="react" class="object-contain">
                </div>
                <div class="w-1/3 p-10">
                    <img src="/swift.png" alt="swift" class="object-contain">
                </div>
            </div>
        </div>
    </div>
</div>
