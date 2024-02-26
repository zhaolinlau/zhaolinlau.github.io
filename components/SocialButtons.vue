<script setup>
const socials = [
	{
		variant: 'dark',
		to: 'https://github.com/zhaolinlau',
		icon: 'github',
		title: 'GitHub',
	},
	{
		variant: 'link',
		to: 'https://www.facebook.com/zhaolinlau/',
		icon: 'facebook',
		title: 'Facebook',
	},
	{
		variant: 'danger is-light',
		to: 'https://www.instagram.com/zhaolin_lau/',
		icon: 'instagram',
		title: 'Instagram',
	},
	{
		variant: 'info',
		to: 'https://www.linkedin.com/in/zhaolinlau/',
		icon: 'linkedin',
		title: 'LinkedIn',
	},
	{
		variant: 'light',
		to: 'https://twitter.com/zhaolinlau',
		icon: 'x-twitter',
		title: 'Twitter',
	},
]
</script>

<template>
	<div class="buttons">
		<OButton tag="NuxtLink" :variant="social.variant" :to="social.to" target="_blank" v-for="social in socials">
			<span class="icon-text">
				<OIcon pack="fab" size="medium" :icon="social.icon" />
				<span>{{ social.title }}</span>
			</span>
		</OButton>
	</div>
</template>