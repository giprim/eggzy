const ROUTES = {
  index: {name: 'index',path: 'index',},
  signUp: {name: 'auth', path: '/auth/'},
  dashboard: { name: '(dashboard)', path: '/(dashboard)/'},
  settings: {name: 'settings', path: '/settings'},
  messages: {name: 'messages', path: '/messages'},
  vendors: {name: 'vendors', path: '/vendors'},
  order: {name: 'order', path: '/order/'},
  details: {name: '[orderID]', path: (id:string) => `/order/${id}`}
}

export default ROUTES