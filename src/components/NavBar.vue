<template>
	<nav
		class="navbar is-fixed-top card"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link class="navbar-item is-size-3 has-text-weight-bold" to="/">
				Zhaolin Lau
			</router-link>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				@click="showNav = !showNav"
				:class="{ 'is-active': showNav }"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div class="navbar-menu" :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<router-link class="navbar-item is-tab" to="/">Home</router-link>
				<router-link class="navbar-item is-tab" to="/contact">Contact</router-link>
				<div class="navbar-item">
					<a class="button is-primary">
						<strong>Donate</strong>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "NavBar",
		data() {
			return {
				showNav: false,
			};
		},
	};
</script>
