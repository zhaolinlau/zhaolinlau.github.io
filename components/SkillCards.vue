<template>
	<div class="columns is-multiline">
		<div class="column is-4" v-for="skill in skills">
			<div class="box">
				<Icon :name="skill.icon" class="icon is-large" />
				<p class="title is-4">{{ skill.title }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const skills = [
	{
		icon: 'logos:supabase-icon',
		title: 'Supabase'
	},
	{
		icon: 'logos:nuxt-icon',
		title: 'Nuxt'
	},
	{
		icon: 'logos:bootstrap',
		title: 'Bootstrap'
	},
	{
		icon: 'logos:laravel',
		title: 'Laravel'
	},
	{
		icon: 'logos:markdown',
		title: 'Markdown'
	},
	{
		icon: 'logos:vuetifyjs',
		title: 'Vuetify'
	},
	{
		icon: 'logos:vue',
		title: 'Vue'
	},
	{
		icon: 'logos:bulma',
		title: 'Bulma'
	},
	{
		icon: 'logos:git-icon',
		title: 'git'
	},
	{
		icon: 'logos:mysql',
		title: 'MySQL'
	},
	{
		icon: 'logos:php',
		title: 'PHP'
	},
	{
		icon: 'logos:javascript',
		title: 'JavaScript'
	},
	{
		icon: 'logos:css-3',
		title: 'CSS'
	},
	{
		icon: 'logos:html-5',
		title: 'HTML'
	},
]
</script>