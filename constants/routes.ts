const ROUTES = {
  index: {
    name: 'index',
    path: 'index',
    title: 'index',
  },
  signUp: {
    name: 'auth', 
    path: '/auth/',
    title: 'Auth',
  },
  dashboard: { 
    name: '(dashboard)', 
    path: '/(dashboard)/',
    title: 'Home',
  },
  settings: {
    name: 'settings', 
    path: '/settings',
    title: 'Settings',
  },
  messages: {
    name: 'messages', 
    path: '/messages',
    title: 'Messages',
  },
  vendors: {
    name: 'vendors', 
    path: '/vendors/',
    title: 'Vendors',
  },
  order: {
    name: 'order', 
    path: '/order/',
    title: 'Order',
  },
  details: {
    name: '[orderID]', 
    path: (id:string) => `/order/${id}`,
    title: 'Order Details',
  }
}

export default ROUTES