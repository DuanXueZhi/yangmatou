<template>
  <div id="app">
    <!--最顶部登录、注册灰色栏-->
    <Top></Top>
    <!--头部搜索栏+四个路由导航-->
    <Header></Header>

    <router-view/>

    <!--下部认证单位，大部分网页都有-->
    <Footer></Footer>
    <!--右侧悬浮条，好像每个网页都有-->
    <RightWing></RightWing>
    <div id="test">
      <p class="test1">测试能不能使用外部less文件</p>
      <span class="test2">测试能不能使用外部css文件</span>
      <p class="test3">
        <span class="testText1">测试能不能使用外部less文件</span>
        <span class="testText2">测试能不能使用外部css文件</span>
        <span class="downDelta"></span>
      </p>
    </div>
  </div>
</template>

<script>
  import Top from '@/components/Top';
  import Header from '@/components/Header';//导入组件，后缀可以省略
  import Footer from '@/components/Footer';
  import RightWing from '@/components/RightWing';

  export default {
    name: 'App',
    components: {
      'Top': Top,
      'Header': Header,
      'Footer': Footer,
      'RightWing': RightWing
    }

  }
</script>

<style lang="less">
  /*导入总的less文件main.less*/
  @import './assets/less/main.less';
  /*导入总的css文件main.css*/
  @import 'assets/css/main.css';
  #app {
    min-width: 1200px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased; /*字体抗锯齿渲染*/
    -moz-osx-font-smoothing: grayscale;
    color: #383838;
  }
  *{padding: 0;margin: 0;}
  li{list-style-type: none;}
  a{text-decoration: none;}
  input,button,select,textarea{outline:none}
  textarea{resize:none}
  #test{
    .box_shadow(10px 10px 5px grey);
  }
</style>
