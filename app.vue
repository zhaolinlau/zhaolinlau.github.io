<script setup>
const date = new Date()
const expYear = date.getFullYear() - 2021
useHead({
	title: 'Zhaolin Lau',
	meta: [
		{ name: 'description', content: 'Web developer with more than ' + expYear + ' years of well-rounded hands-on experience in web technologies like Vue, Nuxt, and Laravel, and a passion for Milo & Milk Tea. Currently building something awesome with Nuxt, exploring innovative web solutions and pushing the boundaries of modern web development. A big fan of open source.' },
		{ name: 'google-site-verification', content: 'VtoMnB1qYS9XFl4WG3wUGq17dPOTwoH5vyWofp90A-Y' }
	]
})

useSeoMeta({
	title: 'Zhaolin Lau',
	ogTitle: 'Zhaolin Lau',
	description: 'Web developer with more than ' + expYear + ' years of well-rounded hands-on experience in web technologies like Vue, Nuxt, and Laravel, and a passion for Milo & Milk Tea. Currently building something awesome with Nuxt, exploring innovative web solutions and pushing the boundaries of modern web development. A big fan of open source.',
	ogDescription: 'Web developer with more than ' + expYear + ' years of well-rounded hands-on experience in web technologies like Vue, Nuxt, and Laravel, and a passion for Milo & Milk Tea. Currently building something awesome with Nuxt, exploring innovative web solutions and pushing the boundaries of modern web development. A big fan of open source.',
	ogImage: '/img/me.jpg',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<div class="bg-zinc-950 text-zinc-50 dark" vaul-drawer-wrapper>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Toaster />
	</div>
</template>