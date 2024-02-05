<script>
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
            <div class="flex flex-col items-center" transition:fade>
                <div class="flex flex-row">
                    <div class="w-3/4 text-xl p-2">
                        <h2 class="text-2xl font-light">Software Engineering Internship</h2>
                        <h2 class="text-2xl font-light">NI (National Instruments)</h2>
                        <h2 class="text-2xl font-light">Skills: C#, WPF, JSON Serialization, Agile Practices, Version Control, Team Collaboration</h2>
                        <h3 class="font-light">May 2023 - August 2023</h3>
                        <h4 class="font-medium py-2">Overview</h4>
                        <p>
                            This is what introduced me to Software Development. I worked with a team of software engineers
                            where I was assigned a project by myself, where I would meet with my mentor and supervisor
                            weekly, and with the team on daily standups. My project was to develop a desktop application for
                            one of their testing softwares.
                        </p>
                        <h4 class="font-medium pt-8 pb-2">Impact</h4>
                        <p>
                            I surpassed expectations by developing a prototype within the first few weeks, and kept developing 
                            features for the project until my internship ended. I also got to demo the application to the product manager
                            as well as the team. I followed Agile practices and Version control throughout my internship.
                        </p>
                        <!-- this will be replaced with some sort of SVG or Physics thingy -->
                        <!-- <ul class="list-disc">
                            <li>C# and WPF</li>
                            <li>.NET Ecosystem</li>
                            <li>Visual Studio</li>
                            <li>Version Control</li>
                            <li>Collaboration with a professional team</li>
                            <li>Code reviewing</li>
                            <li>Experience in Agile Practices</li>
                            <li>Documentation for developing applications</li>
                        </ul> -->
                    </div>
                    <div class="w-1/4">
                        <!-- Little icons or animation here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    
{:else if selectedTab === 'projects'}
    <div class="bg-purpleText text-pastelPurple">
        <div class="container mx-auto px-20 py-5">
            <div class="flex flex-col items-center" transition:fade>
                <div class="flex flex-row">
                    <div class="w-3/4 text-xl p-2 mb-5">
                        <h2 class="text-2xl font-light">Goat Places</h2>
                        <h2 class="text-2xl font-light">Skills: Full Stack Web Development, Azure, MongoDB Atlas</h2>
                        <h3 class="text-lg font-light">August 2023 - Current</h3>
                        <h4 class="text-lg font-medium py-2">Overview</h4>
                        <p>
                            This Project was planned to be a web application that would help new and current students be able to coordinate 
                            events on campus easily as well as navigate it for their classes. This has been developed by a small team of 
                            three, where we would meet up weekly to discuss our progress, steps moving forward, and plans for presentations.
                            We decided on a tech stack of React as our front end, Ktor as our backend (used to be Node.js), MongoDB Atlas
                            as our Database, and Azure as our place to deploy. We currently have the project on halt, but We have a Github
                            with a CI/CD set up for quick deployment.
                        </p>
                        <h4 class="text-lg font-medium py-2">Impact</h4>
                        <p>
                            I was able to learn and gain experience on full stack development, understanding how React works, how MongoDB works, 
                            our backend and its purpose, etc. Connecting everthing was another issue in itself, but we have things set up so that
                            once we connect things together, it should be working close to how we want it. We still have a lot of work to do: including
                            setting up schemas for our database, authentication, and some features, but this has been a great experience so far
                            in terms of developer roles, now we need to focus on delivering what we want our app to do.
                        </p>
                        <!-- <h4 class="text-lg font-medium py-2">Skills learned</h4>
                        <ul class="list-disc">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB Atlas</li>
                            <li>Azure App Services</li>
                            <li>Ktor</li>
                            <li>Team Collaboration</li>
                            <li>Full Stack Web Development</li>
                            <li>CI/CD Pipeline (github workflow)</li>
                        </ul> -->
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="w-3/4 text-xl p-2">
                        <h2 class="text-2xl font-light">SvelteKit Portfolio Page</h2>
                        <h2 class="text-2xl font-light">Skills: SvelteKit, Tailwind CSS, ASP.NET Core, MongoDB Atlas</h2>
                        <h3 class="text-lg font-light">December 2023</h3>
                        <h4 class="text-lg font-medium py-2">Overview</h4>
                        <p>
                            This started off as a very small project, but it very quickly became something more
                            involved, since I first thought "It would be cool to have a blogging system", and I ended
                            up using ASP.NET Core (even though it could be considered overkill for such a small project).
                            Eventually, I made a complete overhaul of the whole site and I wanted to make it something that was
                            "Me". So this is what I came up with!
                        </p>
                        <h4 class="text-lg font-medium py-2">Impact</h4>
                        <p>
                            Using what I already knew about C# and Azure, I was able to make an API server using ASP.NET Core,
                            as well as using it to serve my static files when building my sveltekit frontend. My blogging system
                            will use API calls to my MongoDB Atlas Database in order to populate the blog page. I plan to implement a 
                            separate page where I can log in and create blogs much more easily, but so far this is what I have.
                        </p>
                        <!-- <h4 class="text-lg font-medium py-2">Skills learned</h4>
                        <ul class="list-disc">
                            <li>SvelteKit and Svelte</li>
                            <li>Tailwind CSS</li>
                        </ul> -->
                    </div>
                </div>
                <div class="m-8">
                    <h2 class="text-xl font-light">ATrails</h2>
                    <h2 class="text-xl font-light">Skills: Mobile Development, Cloud BaaS</h2>
                    <h3 class="text-lg font-light">November 2023 - December 2023</h3>
                    <h4 class="text-lg font-medium py-2">Overview</h4>
                    <p>
                        ATrails is an app designed to be a social hub for hikers and trail runners, allowing users to make posts,
                        follow other users, and track their hikes and runs. The project was for a mobile development course which
                        focused on IOS development. This project was developed using SwiftUI and Firebase as a backend, both of which
                        was outside of the scope of what the class taught, only introducing us to the basics of swiftUI. This decision was made
                        on my part in order to learn more about IOS development and using a cloud backend if I ever want to
                        use it for another project. I also learned how to use the MVC design pattern in order to structure the project and
                        make it easier to maintain and add features to. The project was also developed using agile practices, using Azure
                        Devops as a way to organize my features and tasks.
                    </p>
                    <h4 class="text-lg font-medium py-2">Impact</h4>
                    <p>
                        I was able to learn more about mobile development and how to utilize a cloud backend for a mobile application,
                        being able to write and read data from Firestore in order to populate post feeds for users and have it be able
                        to search for group chats as well as join them. You could also make a post which would be sent onto the database
                        and be able to be read by other users. Many other features like the group chat and the hike tracker were not
                        able to be finished since I only had a month to work on the project, but for the time I had, I'm very proud
                        of being able to dynamically populate a post feed and be able to work with technologies that were very new to me.
                    </p>
                    <h4 class="text-lg font-medium py-2">Skills learned</h4>
                    <ul class="list-disc">
                        <li>Swift</li>
                        <li>XCode</li>
                        <li>SwiftUI</li>
                        <li>Firebase</li>
                        <li>MVC</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
{/if}
