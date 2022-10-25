<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand" :href="href">
                    <img src="./../assets/logo-horizontal.svg" :alt="alt" />
                </a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'navBar',
  data() {
    return {

    }
  },
  props: {
    alt: String,
    href: String
  }
}
</script>

<style scoped>
.navbar {
  background: #0B1641;
}
</style>