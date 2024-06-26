<script setup>
const date = new Date();
const expYear = date.getFullYear() - 2021;
useHead({
	title: 'Zhaolin Lau',
	meta: [
		{ name: 'description', content: 'Web developer with more than ' + expYear + ' years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.' },
		{ name: 'google-site-verification', content: 'VtoMnB1qYS9XFl4WG3wUGq17dPOTwoH5vyWofp90A-Y' }
	],
	bodyAttrs: {
		class: 'has-navbar-fixed-top'
	}
})

useSeoMeta({
	title: 'Zhaolin Lau',
	ogTitle: 'Zhaolin Lau',
	description: 'Web developer with more than ' + expYear + ' years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.',
	ogDescription: 'Web developer with more than ' + expYear + ' years of well-rounded experience with a diploma in the field of Computer Science, extensive knowledge of modern Web techniques and love for Milo. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.',
	ogImage: 'img/me.jpg',
	twitterCard: 'Zhaolin Lau',
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
* {
	font-family: 'Merienda', cursive;
}
</style>