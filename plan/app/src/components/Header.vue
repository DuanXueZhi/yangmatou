<template>
  <div id="Header">
    <div class="HeaderBox">
      <h1 v-if="false">{{msg}}</h1>
      <div class="TopSearch">
        <h1 class="home">
          <a href="###" title="首页"></a>
        </h1>
        <form action="" class="centerSearch" >
          <input type="text" v-model="searchData" >
          <button @click="search()">提</button>
        </form>
        <div class="TwoCode"></div>
      </div>
      <div class="BottomList">
        <ul>
          <li>
            <router-link to="/" title="首页">首页</router-link>
          </li>
          <li>
            <router-link to="/product" title="今日限时抢">今日限时抢</router-link>
          </li>
          <li>
            <router-link to="/" title="洋货集">洋货集</router-link>
          </li>
          <li class="genre">
            <el-dropdown>
              <span class="el-dropdown-link">
                分类<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown"><!--从这层开始已经跳出整个app了-->
                <el-dropdown-item class="option">黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <!--<el-dropdown-item disabled>双皮奶</el-dropdown-item>-->
                <!--<el-dropdown-item divided>蚵仔煎</el-dropdown-item>-->
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {add} from '.././assets/js/jsfn.js'
  export default {
    name: 'Header',
    props: [],//传来的属性在此声明
    data() {
      return {
        msg: '网页头部，以搜索为主体',
        activeIndex: '1',
        activeIndex2: '1',
        searchData: ''
      }
    },
    mounted: function () {
      console.log('Header组件挂载成功');
      this.search();
    },
    watch: {
      searchData: function () {
        console.log("change")
      }
    },
    computed:{

    },
    methods: {
      search: function () {
        console.log(this.searchData);
        add();
      },
      search1(){

      }
    }
  }
</script>

<style scoped lang="less">
  /*@import '../assets/less/lib/lessfn';     !*需要修改*!*/
  #Header {
    border-bottom: 2px solid #c33;
    box-shadow: 0 1px 5px grey;               /*配置兼容性*/
    /*.box-shadow(10px 10px 5px grey);*/
    .HeaderBox {
      width: 1200px;
      margin: auto;
      overflow: hidden;
      .TopSearch {
        margin: 15px 0 0;
        overflow: hidden;
        .home {
          margin-top: 17px;
          float: left;
          > a {
            width: 309px;
            height: 63px;
            display: block;
            background: url("../assets/img/ymtTitle.png"); /*路径要修改*/
          }
        }
        .centerSearch {
          float: left;
          width: 450px;
          height: 40px;
          margin: 37px 0 0 63px;
          background-color: #c33;
          > input {
            width: 370px;
            height: 22px;
            padding: 7px 10px;
            background-color: #ffffff;
            border: 0;
            margin: 2px;
            font-size: 16px;
            color: #18181a;
          }
          > button {
            width: 24px;
            height: 36px;
            margin: 0 0 0 14px;
            border: 0;
            background: url("../assets/img/amplify.png") no-repeat -23px 7px; /*路径要修改*/
            color: #c33;
          }
        }
        .TwoCode {
          float: right;
          background: url("../assets/img/TwoCode.png");
          width: 162px;
          height: 150px;
        }
      }
      .BottomList {
        > ul {
          width: 568px;
          height: 45px;
          margin: 0 auto;
          /*text-align: center;*/
          overflow: hidden;
          li {
            display: inline-block;
            padding: 0 35px;
            font-size: 20px;
            font-weight: 700;
            line-height: 45px;
            >a{
              color: #383838;
            }
            &.genre {
              width: 135px;
              position: absolute;
              padding: 0;
              .downDelta {/*下三角，还没想好*/
                /*<!--.triangle-bottom(5px, black);-->*/
              }
            }
            .el-dropdown{
              .el-dropdown-link{
                padding: 0 35px;
                display: inline-block;
                height: 45px;
                font-size: 20px;
                font-weight: 700;
                color: #383838;
              }
            }
            &.genre:hover{
              background: #ffffff;
              border: 1px solid #c33;
              border-bottom: none;
              height: 50px;
              -webkit-box-shadow: 0 -1px 8px #cecece;       /*修改*/
              -moz-box-shadow: 0 0 -1px #cecece;
              box-shadow: 0 0 -1px #cecece;
            }
          }
        }
      }
    }
  }
  .el-dropdown-menu{
    border: 1px solid red;
    .el-dropdown-menu__item {
      color: red;
    }
  }
</style>
