<script>
    import '../app.css'
</script>

<div class="bg-gray-200 p-4">
	<div class="container mx-auto px-4">
		<nav class="flex items-center justify-between h-16">
			<!-- Some logo or brand here -->
<!--			<div class="flex-shrink-0">-->
<!--				<a href="/" class="text-2xl font-bold">Logo</a>-->
<!--			</div>-->

			<div class="flex">
				<a href="/" class="px-4 py-2 text-xl">Home</a>
				<a href="/projects" class="px-4 py-2 text-xl">Projects/Experiences</a>
				<a href="/" class="px-4 py-2 text-xl">Contact</a>
			</div>
		</nav>
	</div>
</div>

<slot />

<!-- Footer -->
<div class="bg-red-900 p-4">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center">
			<div class="flex-shrink-0">
				<a href="/" class="px-4 py-2 text-white text-xl">Home</a>
				<a href="/projects" class="px-4 py-2 text-white text-xl">Projects</a>
				<a href="/" class="px-4 py-2 text-white text-xl">Contact</a>
			</div>
			<div class="flex">
				<div class="text-white text-xl p-10">
					<p>
						<a class="text-yellow-200 hover:text-yellow-400 underline" href="https://www.flaticon.com/free-icon/swift_732250">Swift</a> Icon by:
						<a class="text-yellow-200 hover:text-yellow-400 underline" href="https://www.flaticon.com/authors/kiranshastry" title="react icons">kiranshastry</a>
					</p>
					<p>
						<a class="text-yellow-200 hover:text-yellow-400 underline" href="https://www.flaticon.com/free-icons/c-sharp" title="c sharp icons">C#</a> Icon by:
						<a class="text-yellow-200 hover:text-yellow-400 underline" href="https://www.flaticon.com/authors/freepik">Freepik</a>
					</p>
					<p>
						<a href="https://www.flaticon.com/free-icons/react" title="react icons" class="text-yellow-200 hover:text-yellow-400 underline">React</a> Icon by:
						<a href="https://www.flaticon.com/authors/pixel-perfect" class="text-yellow-200 hover:text-yellow-400 underline">pixel-perfect</a>
					</p>
					<p>
						Icons Provided by
						<a href="https://www.flaticon.com" class="text-yellow-200 hover:text-yellow-400 underline">Flaticon</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>