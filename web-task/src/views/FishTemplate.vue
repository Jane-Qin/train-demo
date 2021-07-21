<template>
  <div></div>
</template>

<script>
// @ is an alias to /src
import V1 from "@/components/FishTemplate/v1.js";
import NewsList from "@/components/FishTemplate/components/NewsList.js";
import imgPng from '@/assets/logo.png';

export default {
  name: "fishTemplate",
  data() {
    return {
      page: 1,
      count: 50,
    };
  },
  async mounted() {
    let newslist = [
      {
        image: "img1",
        title: "新闻1",
        time: "2021-07-11 10:00:32",
        showImage:true,
      },
      {
        image: "img2",
        title: "新闻2",
        time: "2021-07-12 10:00:32",
        showImage:false
      },
    ];
   // let newslist = await this.getNewsList();
   // newslist = newslist.result;
    console.log(newslist);

    //initial FishTemplate
    const v1 = new V1().mounted(this.$el);
    v1.render(NewsList, {
      image: imgPng,
      info: {showImage: true, showDate:false, name: "aaa"},
      data:[1,2,3,4,5],
    });
  },
  methods: {
    getNewsList() {
      return fetch("https://api.apiopen.top/getWangYiNews", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: this.page,
          count: this.count,
        }),
      }).then((response) => response.json());
    },
  },
};
</script>

<style lang="scss">
.news-item {
  display: flex;
  width: 600px;
  height: 100px;
  justify-content: space-between;
}
</style>
