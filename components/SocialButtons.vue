<script setup>
const socials = [
	{
		variant: 'dark',
		href: 'https://github.com/zhaolinlau',
		icon: 'github',
		title: 'GitHub',
	},
	{
		variant: 'link',
		href: 'https://www.facebook.com/zhaolinlau/',
		icon: 'facebook',
		title: 'Facebook',
	},
	{
		variant: 'danger is-light',
		href: 'https://www.instagram.com/zhaolin_lau/',
		icon: 'instagram',
		title: 'Instagram',
	},
	{
		variant: 'info',
		href: 'https://www.linkedin.com/in/zhaolinlau/',
		icon: 'linkedin',
		title: 'LinkedIn',
	},
	{
		variant: 'light',
		href: 'https://twitter.com/zhaolin_lau',
		icon: 'x-twitter',
		title: 'Twitter',
	},
]
</script>

<template>
	<div class="buttons">
		<o-button tag="a" :variant="social.variant" :href="social.href" target="_blank" v-for="social in socials">
			<span class="icon-text">
				<o-icon pack="fab" size="medium" :icon="social.icon"></o-icon>
				<span>{{ social.title }}</span>
			</span>
		</o-button>
	</div>
</template>