import Ember from 'ember'

export default Ember.Controller.extend({
  fiberplantNav: false,
  fiberplantNavTemplate: 'nav-fiberplant',
  adminNav: false,
  adminNavTemplate: 'nav-admin',
  navigation: false,

  actions: {
    openFiberplantNav () {
      this.set('fiberplantNav', true)
    },

    openAdminNav () {
      this.set('adminNav', true)
    },

    openRoute: function (route) {
      this.transitionToRoute(route)
    },

    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
