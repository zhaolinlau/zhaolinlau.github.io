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
			name: 'Ko-fi',
			icon: 'simple-icons:kofi',
			to: 'https://ko-fi.com/V7V6EWJRF'
		},
		{
			name: 'Buy Me a Coffee',
			icon: 'simple-icons:buymeacoffee',
			to: 'https://www.buymeacoffee.com/zhaolinlau'
		}
	]
}