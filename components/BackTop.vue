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

<template>
	<OButton variant="link" class="scrolltotop animate__animated animate__fadeIn" v-if="showButton" @click="scrollToTop"
		icon-left="arrow-up" />
</template>

<style>
.scrolltotop {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 99;
}
</style>