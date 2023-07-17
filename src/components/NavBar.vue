<script setup>
import ref from 'vue';
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
						<o-icon icon="information-variant"></o-icon>
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
						<o-icon icon="email"></o-icon>
						<span>Contact</span>
					</span>
				</a>
				<div class="navbar-item">
					<o-button type="primary" icon-left="file-download" disabled rounded>
						<strong>Resume</strong>
					</o-button>
				</div>
			</div>
		</div>
	</nav>
</template>