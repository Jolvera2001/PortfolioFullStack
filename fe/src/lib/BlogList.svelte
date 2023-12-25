<script>
    // this is the recieved blogs list
    export let blogs;
</script>

<ul class="space-y-10">
    {#each blogs as blog}
        <li>
            <h1 class="text-greenText text-4xl font-bold px-3">{blog.title}</h1>
            <h3 class="text-greenText text-3xl font-normal px-3">{blog.description}</h3>
            <h4 class="text-greenText text-xl font-light py-2 px-3">{blog.date}</h4>
            <p class="text-greenText text-xl font-normal py-5 px-8">{blog.content}</p>
        </li>
    {/each}
</ul>