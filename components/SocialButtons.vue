<script setup>
const socials = useSocial()
</script>

<template>
	<div class="mt-3">
		<Button variant="outline" as-child v-for="(social, index) in socials" :key="social">
			<NuxtLink :class="`${index != 0 ? 'ml-3' : ''}`" :to="social.to" target="_blank">
				<Icon :name="social.icon" /> {{ social.title }}
			</NuxtLink>
		</Button>
	</div>
</template>