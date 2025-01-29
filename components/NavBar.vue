<script setup>
const items = useBar()
</script>

<template>
	<div class="flex items-center justify-evenly sticky top-0 bg-zinc-950/75 backdrop-blur-md p-3 z-[1] border-b">
		<div>
			<Button variant="ghost" @click="scrollTo('#top')">
				<p class="text-xl">Zhaolin Lau</p>
			</Button>
		</div>

		<div>
			<template v-for="item in items" :key="item">
				<Button variant="ghost" @click="scrollTo(`#${item.scrollTo}`)" v-if="item.scrollTo" v-sc>
					<Icon :name="item.icon" /> {{ item.name }}
				</Button>

				<Button variant="ghost" as-child v-else-if="item.to">
					<NuxtLink :to="item.to" target='_blank'>
						<Icon :name="item.icon" /> {{ item.name }}
					</NuxtLink>
				</Button>
			</template>
		</div>
	</div>
</template>