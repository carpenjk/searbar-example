import { withThemeweaver, variant, value } from '@carpenjk/themeweaver';

const theme = withThemeweaver(
  {
    colors: {
      primary: ['#696f92', '#C6D8FF'],
      _secondary: '#C6D8FF',
      secondary: '#047F5E',
      tertiary: '#FEFDEC',
      action: ['#FCEEEF', '#B64D57', '#F3B9BD'],
      link: ['#5D71BA', '#344783'],
      lightText: '#6d6d6d',
      mainText: '#444649',
      bannerText: '#047F5E',
      secondaryText: '#D53D5A',
      // secondaryText: '#E5707A',
      heading: ['#444649', '#696f92', '#344783'],
      lightButton: '#F8F8F8',
      lightBackground: '#F6FEFF',
      disabledBackground: '#909090',
      white: '#ffffff',
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
      openSans: "'Open Sans', sans-serif",
      raleway: "'Raleway', sans-serif",
    },
    fontSizes: [10, 12, 14, 18, 24, 32],
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    sizes: [0, '100%', 80],
    space: [0, 4, 8, 16, 20, 32, 64],
    transitions: {
      down: 'transform 0.5s ease-in',
      left: 'left 500ms ease',
      right: 'right 500ms ease',
      colorBig: 'color 500ms ease',
      padding: 'padding 500ms ease',
    },
    breakpoints: {
      0: 0,
      1: 880,
      2: 1050,
      3: 1200,
      4: 1400,
    },
  },
  {
    // beginning of themeweaver asignments *****************
    button: {
      ...variant('expander', {
        color: 'lightText',
        fontFamily: 'poppins',
        fontSize: 2,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        paddingLeft: 2,
      }),
      ...variant('search', {
        backgroundColor: 'action[1]',
        color: 'lightBackground',
        fontFamily: 'roboto',
        fontSize: 2,
      }),
      ...variant('search_hover', {
        backgroundColor: 'action[1]',
        color: 'lightBackground',
        transform: value('scale(1.04)'),
      }),
    },
    h1: {
      ...variant('searchBar', {
        color: 'mainText',
        fontFamily: 'roboto',
        fontWeight: 'bold',
        fontSize: 3,
        lineHeight: value('150%'),
        letterSpacing: value('0.025em'),
        marginBottom: 3,
      }),
    },
    searchBar: {
      backgroundColor: 'lightBackground',
      width: value('auto'),
      maxWidth: [value('500px'), value('none')],
      borderRadius: 2,
      paddingTop: [2, 2],
      paddingRight: [2, 2],
      paddingBottom: [2, 2],
      paddingLeft: [2, 2],
    },
    searchBar_container: {
      ...variant('buttons', {
        paddingTop: 4,
        paddingRight: 2,
        paddingBottom: 4,
        paddingLeft: 2,
      }),
      ...variant('filterGroup', {
        marginTop: 5,
        paddingBottom: 3,
      }),
      ...variant('filter', {
        marginBottom: 2,
        marginRight: [0, 3],
      }),
    },
  },
);

export default theme;
