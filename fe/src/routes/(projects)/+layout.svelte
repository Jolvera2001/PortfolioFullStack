<style>
	.transition-font {
		transition: font-size 0.3s ease-in-out;
	}
</style>

<div class="p-4 bg-blueText text-pastelBlue">
	<div class="container mx-auto px-4">
		<nav class="flex items-center justify-center h-16">
			<div class="flex">
				<a href="/" class="px-4 py-2 text-xl transition-font hover:text-2xl">Home</a>
				<a href="/aboutme" class="px-4 py-2 text-xl transition-font hover:text-2xl">About Me</a>
				<a href="/projects" class="px-4 py-2 text-xl transition-font hover:text-2xl">Projects/Experiences</a>
				<a href="/blog" class="px-4 py-2 text-xl transition-font hover:text-2xl">Blog</a>
				<a href="/contact" class="px-4 py-2 text-xl transition-font hover:text-2xl">Contact</a>
			</div>
		</nav>
	</div>
</div>

<slot />