<template>
  <div id="Top">
    <div class="TopBox">
      <p v-if="false">{{msg}}</p>
      <ul class="leftWelcome">
        <li>
          <span class="text">Hi,欢迎来到扬马头！</span>
        </li>
        <li>
          <a href="###"><span>我是买手</span></a>
        </li>
      </ul>
      <ul class="rightOperate">
        <li>
          <a href="###"><span>登录</span></a>
        </li>
        <li>
          <a href="###"><span>注册</span></a>
        </li>
        <li>
          <a href="###"><span>购物车</span></a>
        </li>
        <li>
          <a href="###"><span>我的订单</span></a>
        </li>
        <li>
          <a href="###"><span>个人中心</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Top",
      data() {
        return {
          msg: '最顶部灰色栏'
        }
      }
    }
</script>

<style scoped lang="less">
  #Top{
    background-color: #f8f8f8;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    .TopBox{
      width: 1200px;
      margin: auto;
      overflow: hidden;
      ul{
        &.leftWelcome,&.rightOperate{
          li{
            float: left;
            a{
              padding: 0 10px;
              color: #646464;
            }
          }
          li:hover a{
            color: #cc3333;
          }
        }
        &.leftWelcome{
          float: left;
        }
        &.rightOperate{
          float: right;
        }
      }
    }
  }
</style>
