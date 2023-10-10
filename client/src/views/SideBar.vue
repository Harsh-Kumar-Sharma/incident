<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            header: 'Component',
            hiddenOnCollapse: true,
          },
          {
            href: '/common-section',
            title: 'Common Section',
            icon: 'fa fa-user',
          },
          {
            href: '/rvp-section',
            title: 'RVP Section',
            icon: 'fa fa-chart-area',
          },
        ],
      }
    },
  }
</script>