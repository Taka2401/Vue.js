<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name">

    <br><br>
    <label for="comment">コメント</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>

    <button @click="createComment">サーバーに送信</button>

    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前： {{ post.fields.name.stringValue }}</div>
      <div>コメント： {{ post.fields.comment.stringValue }}</div>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() {
    axios.get('/comments',
    )
    .then(response => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    createComment() {
      axios.post(
        '/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      );
      this.name = "";
      this.commment = "";
    }
  }
};
</script>

<style scoped>
div {
  width: 700px;
  margin: 10px auto;
  text-align: center;
}
</style>