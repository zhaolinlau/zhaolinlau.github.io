<script setup>
const socials = useSocial()
</script>

<template>
	<div>
		<template v-for="(social, index) in socials" :key="social">
			<Button variant="outline" as-child>
				<NuxtLink :class="`${index != 0 ? 'ml-3' : ''}`" :to="social.to" target="_blank">
					<Icon :name="social.icon" :class="social.color" /><span class="hidden lg:inline-flex"> {{
						social.title }}</span>
				</NuxtLink>
			</Button>
		</template>
	</div>
</template>