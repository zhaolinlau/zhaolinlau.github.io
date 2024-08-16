<script setup>
const { data: socials } = await useFetch('/api/socials', {
	method: 'get'
})
</script>

<template>
	<div class="buttons">
		<NuxtLink :class="`button is-${social.variant}`" :to="social.to" target="_blank" v-for="social in socials">
			<Icon :name="social.icon" />
			<span>{{ social.title }}</span>
		</NuxtLink>
	</div>
</template>