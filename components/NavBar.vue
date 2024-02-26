<script setup>
import { ref } from 'vue';
const showNav = ref(false);
import VueScrollTo from 'vue-scrollto';
const scrollToElement = (id) => {
	VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};
</script>

<template>
	<nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation" id="nav">
		<div class="navbar-brand">
			<NuxtLink class="navbar-item" @click="scrollToElement('#nav')">
				<p class="title">Zhaolin Lau</p>
			</NuxtLink>

			<NuxtLink role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav"
				:class="{ 'is-active': showNav }">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</NuxtLink>
		</div>

		<div class="navbar-menu" :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<NuxtLink class="navbar-item is-tab" @click="scrollToElement('#about')">
					<span class="icon-text">
						<OIcon icon="information-variant-circle-outline" />
						<span>About</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item is-tab" @click="scrollToElement('#skills')">
					<span class="icon-text">
						<OIcon icon="code-tags" />
						<span>Skills</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item is-tab" @click="scrollToElement('#portfolio')">
					<span class="icon-text">
						<OIcon icon="folder-file" />
						<span>Portfolio</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item is-tab" @click="scrollToElement('#contact')">
					<span class="icon-text">
						<OIcon icon="mailbox" />
						<span>Contact</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item" to='https://ko-fi.com/V7V6EWJRF' target='_blank'>
					<NuxtImg src='img/kofi1.webp' placeholder />
				</NuxtLink>
				<NuxtLink class="navbar-item" to="https://www.buymeacoffee.com/zhaolinlau" target="_blank">
					<NuxtImg src="img/default-yellow.png" placeholder />
				</NuxtLink>
			</div>
		</div>
	</nav>
</template>