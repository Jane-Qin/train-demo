<template>
  <div class="menu">
    <router-link to="/conversion"><div class="item">进制转换</div></router-link>
    <router-link to="/codeEditor"><div class="item">编辑代码文件和保存文件</div></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    border: 1px #e0e0e0 solid;
    background: #f0f0f0;
    width: 200px;
    height: 100px;
    margin: 10px;
    border-radius: 6px;
  }
}
</style>
