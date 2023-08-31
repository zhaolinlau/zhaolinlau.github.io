<script setup>
const skills = [
	{
		icon: 'nuxt',
		title: 'Nuxt',
	},
	{
		icon: 'bootstrap',
		title: 'Bootstrap',
	},
	{
		icon: 'laravel',
		title: 'Laravel',
	},
	{
		icon: 'language-markdown',
		title: 'Markdown',
	},
	{
		icon: 'vuetify',
		title: 'Vuetify',
	},
	{
		icon: 'vuejs',
		title: 'Vue.js',
	},
	{
		icon: 'bulma',
		title: 'Bulma',
	},
	{
		icon: 'dolphin',
		title: 'MySQL',
	},
	{
		icon: 'language-php',
		title: 'PHP',
	},
	{
		icon: 'language-javascript',
		title: 'JavaScript',
	},
	{
		icon: 'language-css3',
		title: 'CSS',
	},
	{
		icon: 'language-html5',
		title: 'HTML',
	},
]
</script>

<template>
	<div class="columns is-multiline">
		<div class="column is-4" v-for="skill in skills">
			<div class="box has-background-dark has-text-light">
				<o-icon :icon="skill.icon" size="large"></o-icon>
				<p class="title is-4 has-text-light">{{ skill.title }}</p>
			</div>
		</div>
	</div>
</template>