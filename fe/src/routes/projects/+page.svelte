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

<!-- tab selection buttons -->
<div class="flex justify-evenly">
    <button class="p-8 mx-2 text-2xl" on:click={() => switchTab('experience')}>
        Experience
    </button>
    <div class="border-r-2"></div>
    <button class="p-8 mx-2 text-2xl" on:click={() => switchTab('projects')}>
        Projects
    </button>
</div>
<div class="border-b-4"></div>


<!-- tab content -->
{#if selectedTab === 'experience'}
    <div class="container mx-auto px-40 py-20">
        <div class="flex flex-col items-center" transition:fade>
            <h1 class="text-2xl font-medium">Experience</h1>
            <div class="m-8">
                <h2 class="text-xl font-light">Software Engineering Internship</h2>
                <h2 class="text-xl font-light">NI (National Instruments)</h2>
                <h3 class="text-lg font-light">May 2023 - August 2023</h3>
                <h4 class="text-lg font-medium py-2">Overview</h4>
                <p>
                    My Internship was what got me started in getting industry skills relating to software Engineering. I worked with a
                    team of professional software engineers to develop a desktop application for one of the company's testing software.
                    I was able to learn more about desktop development using C# and WPF, as well as gaining experience in working with version control
                    and participating in code reviews as the project was constantly evolving. The internship period also gave me
                    experience in working with a team of professional software engineers and exposure to practices within a company.
                    Although this was a project that I worked on independently, I had a mentor and supervisor that I would meet with
                    on a weekly basis to discuss my progress and any blockers that I had, as well as any other topic relating to
                    Software Engineering and the company. The internship was within a program that let me meet other interns and
                    get to their projects and experiences as well.
                </p>
                <h4 class="text-lg font-medium py-2">Impact</h4>
                <p>
                    I was able to surpass expectations by being able to move past the original scope of the project, which
                    was to develop a prototype. Past this, I was able to develop unit tests and began the implementation of
                    environment files and UI before reaching the end of my internship. I was able to meet one of the company's
                    product managers relating to my application and other teams in order to give an application demo and gain
                    feedback in order to continue development. I was also able to document my progress relating to what the application
                    does and the research I needed to do in order to make it work. These documents were shared on the cloud where
                    my team would be able to read and pick up where I left off on the project. The git practices also left the
                    project in a state where it could be picked up by another developer and continue development.
                </p>
                <h4 class="text-lg font-medium py-2">Skills learned</h4>
                <ul class="list-disc">
                    <li>C# and WPF</li>
                    <li>.NET Ecosystem</li>
                    <li>Visual Studio</li>
                    <li>Version Control</li>
                    <li>Collaboration with a professional team</li>
                    <li>Code reviewing</li>
                    <li>Experience in Agile Practices</li>
                    <li>Documentation for developing applications</li>
                </ul>
            </div>
        </div>
    </div>
{:else if selectedTab === 'projects'}
    <div class="container mx-auto px-40 py-20">
        <div class="flex flex-col items-center" transition:fade>
            <h1 class="text-2xl font-medium">Projects</h1>
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
{/if}
