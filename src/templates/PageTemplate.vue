
<template>
  <Layout>
    <h1 style="text-align:center">{{ $context.name }}</h1>
    <h2 v-html="$context.header"></h2>
    <br/>
    <h2 v-html="$context.body"></h2>
    <br />
    <h2 v-html="$context.footer"></h2>
    <img :src="$context.image"/>
  </Layout>
</template>
<script>
export default {
     metaInfo() {
    return {
      title: this.$context.header,
      meta: [
             { name: this.$context.footer, content: this.$context.name }
      ]
    }
  },

  mounted() {
      //console.log(this.$context.header)
      //console.log(this.$page.allGoogleSheet.edges[2].node.Header)
  }
}
</script>
