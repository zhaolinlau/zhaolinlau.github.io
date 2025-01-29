<script setup>
const scrollY = ref(0)

const scrollToTop = async () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScrollY = async () => {
	scrollY.value = window.scrollY
}

onMounted(() => {
	window.addEventListener('scroll', handleScrollY)
})
</script>

<template>
	<div class="bottom-5 right-5 fixed z-10 transition-opacity duration-300"
		:class="scrollY > 250 ? 'opacity-100' : 'opacity-0 pointer-events-none'">
		<Button @click="scrollToTop" size="icon">
			<Icon name="mdi:arrow-up" />
		</Button>
	</div>
</template>