<template>
	<button class="button is-link scrolltotop animate__animated animate__fadeIn" v-if="showButton" @click="scrollToTop">
		<span class="icon">
			<Icon name="mdi:arrow-up" size="1.2em" />
		</span>
	</button>
</template>

<script setup>
const showButton = ref(false);

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})

function handleScroll() {
	showButton.value = window.scrollY > 250;
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.scrolltotop {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 99;
}
</style>