<script setup>
const socials = useSocial()
</script>

<template>
	<div class="mt-3">
		<template v-for="(social, index) in socials" :key="social">
			<Button variant="outline" as-child class="hidden lg:inline-block">
				<NuxtLink :class="`${index != 0 ? 'ml-3' : ''}`" :to="social.to" target="_blank">
					<Icon :name="social.icon" /> {{ social.title }}
				</NuxtLink>
			</Button>

			<Button variant="outline" as-child class="lg:hidden" size="icon">
				<NuxtLink :class="`${index != 0 ? 'ml-3' : ''}`" :to="social.to" target="_blank">
					<Icon :name="social.icon" />
				</NuxtLink>
			</Button>
		</template>
	</div>
</template>