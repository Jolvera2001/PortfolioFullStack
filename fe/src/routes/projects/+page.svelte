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
<div class="flex justify-evenly bg-pastelBlue text-3xl text-blueText">
    <button class="p-5 my-5 transition-font hover:text-4xl"
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
    <div class="bg-pastelBlue">
        <div class="container mx-auto px-20 py-10">
            <div class="flex flex-col items-center" transition:fade>
                <div class="flec flex-row">
                    <div class="m-8 text-blueText w-3/5 text-2xl">
                        <h2 class="text-3xl font-light">Software Engineering Internship</h2>
                        <h2 class="text-3xl font-light">NI (National Instruments)</h2>
                        <h3 class="font-light">May 2023 - August 2023</h3>
                        <h4 class="font-medium py-2">Overview</h4>
                        <p>
                            This is what introduced me to Software Development. I worked with a team of software engineers
                            where I was assigned a project by myself, where I would meet with my mentor and supervisor
                            weekly, and with the team on daily standups. My project was to develop a desktop application for
                            one of their testing softwares.
                        </p>
                        <h4 class="font-medium py-2">Impact</h4>
                        <p>
                            I surpassed expactations by developing a prototype within the first few weeks, and kept developing 
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
                    <div class="w-2/5">
                    </div>
                </div>
            </div>
        </div>
    </div>
{:else if selectedTab === 'projects'}
    <div>
        <div class="container mx-auto px-40 py-20">
            <div class="flex flex-col items-center" transition:fade>
                <div class="m-8">
                    <h2 class="text-xl font-light">Goat Places</h2>
                    <h2 class="text-xl font-light">Skills: Full Stack Web Development, Cloud PaaS, Cloud DB</h2>
                    <h3 class="text-lg font-light">August 2023 - Current</h3>
                    <h4 class="text-lg font-medium py-2">Overview</h4>
                    <p>
                        The project is a web application that would serve to solve the issue of coordinating events on our campus
                        as well as serve as a way to find events and buildings for new students. The project was developed using
                        React for the frontend, Node.js for the backend, MongoDB Atlas for the database, and Azure App Services
                        as our hosting platform. As a small team of three, we could meet on a weekly basis to discuss our progress and
                        features to develop as our project progressed. We have also decided to change our backend to Ktor, a Kotlin
                        server framework, in order to learn more about Kotlin and backends besides Node.js because of its issues with
                        being slow.
                    </p>
                    <h4 class="text-lg font-medium py-2">Impact</h4>
                    <p>
                        I was able to gain experience in all of our technologies, being able to develop the frontend and backend of
                        the application. I was also able to learn more about cloud technologies like Azure in order to host our application
                        and MongoDB Atlas as a way to store our data. Our web application is blocked because of issues with Node.js, having
                        us unable to login users, but a landing page was developed and a home page as well in order to keep our progress forward.
                        I was able to replace our server with Ktor and learn more about it to serve our files. I plan to redo our APIs moving forward
                        as well as moving and refactoring files onto the new repository. Ktor also gave me a change to learn how to set up CI/CD
                        using github workflows to automatically update and deploy our application when we push to our main branch.
                    </p>
                    <h4 class="text-lg font-medium py-2">Skills learned</h4>
                    <ul class="list-disc">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>MongoDB Atlas</li>
                        <li>Azure App Services</li>
                        <li>Ktor</li>
                        <li>Team Collaboration</li>
                        <li>Full Stack Web Development</li>
                        <li>CI/CD Pipeline (github workflow)</li>
                    </ul>
                </div>
                <div class="m-8">
                    <h2 class="text-xl font-light">SvelteKit Portfolio Page</h2>
                    <h2 class="text-xl font-light">Skills: SvelteKit, CSS Frameworks</h2>
                    <h3 class="text-lg font-light">December 2023</h3>
                    <h4 class="text-lg font-medium py-2">Overview</h4>
                    <p>
                        This project was something for me to learn more about SvelteKit since I've heard a lot of good things about it
                        as well as Tailwind CSS streamlining the styling process. I needed a portfolio page to showcase my projects and
                        decided it was a good time to put this in action using these technologies. It was a very smooth process compared to
                        other technologies I've used, being able to quickly set up a project and start developing. Overall the majority of this website was made
                        within a few days and there can be much to improve even now. I'm just happy I have my own website to be able to showcase my
                        projects and skills.
                    </p>
                    <h4 class="text-lg font-medium py-2">Impact</h4>
                    <p>
                        I was able to learn more about SvelteKit and the capabilities that it had, researching the documentation and
                        learning how to use it for static site generation or as a SPA if I ever needed to make one using the same framework.
                        Tailwind CSS was what took up the majority of my learning time, but once I had a good grasp of it, it became easier
                        as I kept building the site. Thanks to my past experience in Azure, I learned to use the Azure Static Web App service
                        and set up a github workflow to automatically deploy my site when I push to my main branch.
                    </p>
                    <h4 class="text-lg font-medium py-2">Skills learned</h4>
                    <ul class="list-disc">
                        <li>SvelteKit and Svelte</li>
                        <li>Tailwind CSS</li>
                    </ul>
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
