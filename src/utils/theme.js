export const theme = {
	colors: {
		btnColor: '#F76536',
		heroTitleColor: '#F3E5CD',
	},

	breakpoints: {
		mobile: {
			media: '(max-width: 767.98px)',
			width: '320px',
		},
		tablet: {
			media: '(min-width: 768px) and (max-width: 1279.98px)',
			width: '768px',
		},
    fromTablet: {
      media: '(min-width: 768px)',
      width: '768px',
    },
    toDesktop: {
      media: '(max-width: 1279.98px)',
      width: '768px',
    },
		desktop: {
			media: '(min-width: 1440px)',
			width: '1440px',
		},

    fonts: {
      heroTitle: 'Lexend',
      main: 'Varela Round',
      secondary: 'Varela',
      schedule: 'Montserrat',
    }
	}
}
