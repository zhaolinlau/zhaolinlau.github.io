export const useBar = () => {
	return [
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
			name: 'Projects',
			icon: 'mdi:folder-file',
			scrollTo: 'projects'
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
	]
}