<script setup>
import VueScrollTo from 'vue-scrollto';

const showNav = ref(false);

const scrollToElement = async (id) => {
	await VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};

const { data: items } = await useFetch('/api/navbar', {
	method: 'get'
})
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
				<template v-for="item in items" :key="item">
					<NuxtLink class="navbar-item" @click="scrollToElement(`#${item.scrollTo}`)" v-if="item.scrollTo">
						<span class="icon-text">
							<span class="icon">
								<Icon :name="item.icon" />
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