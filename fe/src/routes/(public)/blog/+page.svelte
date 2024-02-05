<script>
import BlogList from '$lib/BlogList.svelte'
import blogs from '$lib/testBlogs.json'; // Import the static data
</script>

<div class="w-full bg-pastelGreen">
    <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center md:justify-between p-10">
            <h1 class="text-greenText text-4xl mb-10">Blogs</h1>
            <BlogList {blogs} />
        </div>
    </div>
</div>

