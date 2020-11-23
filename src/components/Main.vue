<template>
    <section>
        <Header></Header>
        <section class="main-container">
            <div class="post" v-for="(post, index) in posts" :key="index">
            <img :src="post.source" :alt="post.description">
            <h2>{{post.description}}</h2>
            </div>
        </section>
    </section>
    
</template>
<script>
    import Header from "./Header"
    export default {
        name: 'Main',
        components: {
            Header,
        },
        computed: {
            posts: function () {
                return this.$storePosts.state.posts
            }
        }
    }
</script>