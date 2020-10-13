<template lang="pug">
vue-navigation-bar(:options='navbarOptions')
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "/",
        brandImage: "",
        brandImageAltText: "NISER",
        collapseButtonOpenColor: "#fff",
        collapseButtonCloseColor: "#fff",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [],
        menuOptionsRight: [
          {
            type: "link",
            text: "Home",
            path: { name: "Home" }
          },
          {
            type: "link",
            text: "About",
            path: { name: "About" }
          },
        ]
      }
    };
  }
};
</script>
