<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(
              to="/"
            ) Serial List
            .button-burger(
              @click="menuShow=!menuShow"
              :class="{active: menuShow}"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper(
              :class="{active: menuShow}"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow=false"
                  )
                    router-link.navbar-link(
                      :to="`${link.url}`"
                    ) {{link.title}}
    router-view               
</template>

<script>
export default {
  data() {
    return {
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'},
         {title: 'Tasks', url: '/task'}
      ],

      menuShow: false
    }
  }
}
</script>


<style lang="stylus">
// @import './assets/stylus/main.styl'
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>

