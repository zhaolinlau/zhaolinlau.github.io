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
				<template v-for="item in items" :key="item">
					<NuxtLink class="navbar-item" @click="scrollToElement(`#${item.scrollTo}`)" v-if="item.scrollTo">
						<span class="icon-text">
							<span class="icon">
								<Icon :name="item.icon" size="1.2em" />
							</span>
							<span>{{ item.name }}</span>
						</span>
					</NuxtLink>
				</template>

				<div class="navbar-item">
					<div class="buttons">
						<template v-for="item in items" :key="item">
							<NuxtLink :class="`button ${item.color}`" :to="item.to" target='_blank' v-if="item.to">
								<span class="icon">
									<Icon name="simple-icons:kofi" />
								</span>
								<span>
									{{ item.name }}
								</span>
							</NuxtLink>
						</template>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import VueScrollTo from 'vue-scrollto';

const showNav = ref(false);

const scrollToElement = async (id) => {
	await VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};

const items = ref([
	{
		name: 'About',
		icon: 'mdi:information-variant-circle-outline',
		scrollTo: 'about'
	},
	{
		name: 'Skills',
		icon: 'mdi:code-tags',
		scrollTo: 'skills'
	},
	{
		name: 'Portfolio',
		icon: 'mdi:folder-file',
		scrollTo: 'portfolio'
	},
	{
		name: 'Contact',
		icon: 'mdi:mailbox',
		scrollTo: 'contact'
	},
	{
		name: 'Buy Me a Coffee',
		icon: 'simple-icons:kofi',
		color: 'is-info',
		to: 'https://ko-fi.com/V7V6EWJRF'
	},
	{
		name: 'Buy me a coffee',
		icon: 'simple-icons:buymeacoffee',
		color: 'is-warning',
		to: 'https://www.buymeacoffee.com/zhaolinlau'
	}
]);
</script>