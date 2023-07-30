<script setup>
import { ref } from 'vue';
const showNav = ref(false);
</script>

<template>
	<nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<p class="title">Zhaolin Lau</p>
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav"
				:class="{ 'is-active': showNav }">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div class="navbar-menu" :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<a class="navbar-item is-tab" href="#about">
					<span class="icon-text">
						<o-icon icon="information-variant-circle-outline"></o-icon>
						<span>About</span>
					</span>
				</a>
				<a class="navbar-item is-tab" href="#skills">
					<span class="icon-text">
						<o-icon icon="code-tags"></o-icon>
						<span>Skills</span>
					</span>
				</a>
				<a class="navbar-item is-tab" href="#portfolio">
					<span class="icon-text">
						<o-icon icon="folder-file"></o-icon>
						<span>Portfolio</span>
					</span>
				</a>
				<a class="navbar-item is-tab" href="#contact">
					<span class="icon-text">
						<o-icon icon="mailbox"></o-icon>
						<span>Contact</span>
					</span>
				</a>
				<a class="navbar-item" href='https://ko-fi.com/V7V6EWJRF' target='_blank'>
					<nuxt-img src='img/kofi1.webp' alt='Buy Me a Coffee at ko-fi.com' />
				</a>
				<a class="navbar-item" href="https://www.buymeacoffee.com/zhaolinlau" target="_blank">
					<nuxt-img src="img/default-yellow.png" alt="Buy Me A Coffee" />
				</a>
			</div>
		</div>
	</nav>
</template>