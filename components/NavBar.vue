<script setup>
import { ref } from 'vue';
const showNav = ref(false);
import VueScrollTo from 'vue-scrollto';
const scrollToElement = async (id) => {
	await VueScrollTo.scrollTo(id, {
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
				<span aria-hidden="true"></span>
			</NuxtLink>
		</div>

		<div class="navbar-menu" :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<NuxtLink class="navbar-item" @click="scrollToElement('#about')">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:information-variant-circle-outline" />
						</span>
						<span>About</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item" @click="scrollToElement('#skills')">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:code-tags" />
						</span>
						<span>Skills</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item" @click="scrollToElement('#portfolio')">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:folder-file" />
						</span>
						<span>Portfolio</span>
					</span>
				</NuxtLink>
				<NuxtLink class="navbar-item" @click="scrollToElement('#contact')">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:mailbox" />
						</span>
						<span>Contact</span>
					</span>
				</NuxtLink>
				<div class="navbar-item">
					<div class="buttons">
						<NuxtLink class="button is-info" to='https://ko-fi.com/V7V6EWJRF' target='_blank'>
							<span class="icon">
								<Icon name="simple-icons:kofi" />
							</span>
							<span>
								Buy Me a Coffee
							</span>
						</NuxtLink>
						<NuxtLink class="button is-warning" to="https://www.buymeacoffee.com/zhaolinlau" target="_blank">
							<span class="icon">
								<Icon name="simple-icons:buymeacoffee" />
							</span>
							<span>
								Buy me a coffee
							</span>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>