<template>
  <div class="find">
    <div class="classlist">
      <div class="classlist-item" v-for="classListItem in movieFind.classList">
        <classlist :classListData="classListItem"></classlist>
      </div>
    </div>
    <div class="board">
      <div class="boardBox-item" v-for="boardBoxItem in movieFind.boardBox">
        <boardBox :boardBoxData="boardBoxItem"></boardBox>
      </div>
    </div>
    <div class="festival">
      <h2>全球电影奖项</h2>
      <div class="festival-list-wrapper">
        <ul class="festival-list">
          <li class="festival-item" v-for="festivalBoxItem in movieFind.festivalBox">
            <festivalBox :festivalBoxData="festivalBoxItem"></festivalBox>
          </li>
        </ul>
      </div>
      <div class="prize">全球电影奖项<i class="iconfont">&#xe62d;</i></div>
    </div>
  </div>
</template>

<script>
import classlist from 'components/classlist/classlist'
import boardBox from 'components/boardBox/boardBox'
import festivalBox from 'components/festivalBox/festivalBox'
export default {
  data() {
    return {
      movieFind: {}
    }
  },
  created() {
    this.axios.get('/movie/movieFind').then(response => {
      if (response.statusText === 'OK') {
        this.movieFind = response.data.data
        // console.log(this.movieFind)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    classlist,
    boardBox,
    festivalBox
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/index";
.find {
  width: 100%;
  overflow: hidden;
  background: #F6F6F6;
  .classlist {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .board {
    width: 100%;
    background: #fff;
    margin-top: 20px;
    overflow: hidden;
    .boardBox-item {
      width: 50%;
      float: left;
      box-sizing: border-box;
      border-bottom: 1px solid #E9E9E9;
      border-right: 1px solid #E9E9E9;
    }
  }
  .festival {
    // width: 100%;
    background: #fff;
    margin-top: 20px;
    padding-left: 15px;
    overflow: hidden;
    h2 {
      height: 30px;
      margin-top: 15px;
      color: #000;
      line-height: 30px;
    }
    .festival-list-wrapper {
      height: 230px;
      overflow: hidden;
      .festival-list {
        height: 230px;
        padding-bottom: 17px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        .festival-item {
          width: 33%;
          // float: left;
          display: inline-block;
        }
      }
    }
    .prize {
      width: 100%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: @lmgreen-deep;
    }
  }
}
</style>
