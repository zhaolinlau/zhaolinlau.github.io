<script setup>
const items = useBar()
import { Menu } from 'lucide-vue-next'
const isOpen = ref(false)

const test = async (location) => {
	isOpen.value = false
	scrollTo(`#${location}`)
}
</script>

<template>
	<div
		class="flex items-center justify-between lg:justify-evenly sticky top-0 bg-zinc-950/75 backdrop-blur-md p-3 z-[1] border-b">
		<Button variant="ghost" @click="scrollTo('#top')">
			<p class="text-xl">Zhaolin Lau</p>
		</Button>

		<div class="hidden lg:flex">
			<template v-for="item in items" :key="item">
				<Button variant="ghost" @click="scrollTo(`#${item.scrollTo}`)" v-if="item.scrollTo">
					<Icon :name="item.icon" /> {{ item.name }}
				</Button>

				<Button variant="ghost" as-child v-else-if="item.to">
					<NuxtLink :to="item.to" target='_blank'>
						<Icon :name="item.icon" /> {{ item.name }}
					</NuxtLink>
				</Button>
			</template>
		</div>

		<Drawer v-model:open="isOpen">
			<DrawerTrigger as-child>
				<Button variant="outline" size="icon" class="lg:hidden">
					<Menu />
				</Button>
			</DrawerTrigger>

			<DrawerContent class="dark text-zinc-50">
				<DrawerHeader>
					<DrawerTitle class="text-center">
						Menu
					</DrawerTitle>
				</DrawerHeader>

				<template v-for="item in items" :key="item">
					<Button class="w-full" variant="ghost" @click="test(item.scrollTo)" v-if="item.scrollTo">
						<Icon :name="item.icon" /> {{ item.name }}
					</Button>

					<Button class="w-full" variant="ghost" as-child v-else-if="item.to">
						<NuxtLink :to="item.to" target='_blank'>
							<Icon :name="item.icon" /> {{ item.name }}
						</NuxtLink>
					</Button>
				</template>

				<DrawerFooter>
					<DrawerClose as-child>
						<Button variant="outline">
							Close
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	</div>
</template>