<script setup>
const socials = [
	{
		variant: 'dark',
		to: 'https://github.com/zhaolinlau',
		icon: 'line-md:github',
		title: 'GitHub',
	},
	{
		variant: 'link',
		to: 'https://www.facebook.com/zhaolinlau/',
		icon: 'line-md:facebook',
		title: 'Facebook',
	},
	{
		variant: 'danger is-light',
		to: 'https://www.instagram.com/zhaolin_lau/',
		icon: 'line-md:instagram',
		title: 'Instagram',
	},
	{
		variant: 'info',
		to: 'https://www.linkedin.com/in/zhaolinlau/',
		icon: 'line-md:linkedin',
		title: 'LinkedIn',
	},
	{
		variant: 'light',
		to: 'https://twitter.com/zhaolinlau',
		icon: 'line-md:twitter-x',
		title: 'Twitter',
	},
]
</script>

<template>
	<div class="buttons">
		<NuxtLink :class="`button is-${social.variant}`" :to="social.to" target="_blank" v-for="social in socials">
			<Icon :name="social.icon" size="1.2em" />
			<span>{{ social.title }}</span>
		</NuxtLink>
	</div>
</template>