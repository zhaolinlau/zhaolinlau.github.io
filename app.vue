<script setup>
useHead({
	title: 'Zhaolin Lau',
	meta: [
		{ name: 'description', content: 'Web developer with more than 3 years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.' },
		{ name: 'google-site-verification', content: 'VtoMnB1qYS9XFl4WG3wUGq17dPOTwoH5vyWofp90A-Y' }
	]
})

useSeoMeta({
	title: 'Zhaolin Lau',
	ogTitle: 'Zhaolin Lau',
	description: 'Web developer with more than 3 years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.',
	ogDescription: 'Web developer with more than 3 years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.',
	ogImage: 'img/me.jpg',
	twitterCard: 'Zhaolin Lau',
})
</script>

<template>
	<div class="has-background-black has-text-white">
		<ClientOnly fallback-tag="progress" fallback="Loading...">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</ClientOnly>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&display=swap');

:root {
	background-color: black;
}

* {
	font-family: 'Merienda', cursive;
}
</style>