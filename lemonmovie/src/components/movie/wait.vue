<template>
  <div class="wait">
    <div class="pre">
      <h3>预告片推荐</h3>
      <div class="pre-list">
        <div class="pre-box" v-for="preItem in movieWait.pre">
          <pre-box :preData="preItem"></pre-box>
        </div>
      </div>
    </div>
    <div class="expect">
      <h3>近期最受期待</h3>
      <div class="expect-list">
        <div class="expect-box" v-for="expectItem in movieWait.expect">
          <expect-box :expectData="expectItem"></expect-box>
        </div>
      </div>
    </div>
    <div class="movies" v-for="moviesItem in movieWait.movies">
      <h3>{{moviesItem.comingTitle}}</h3>
      <div class="movies-list">
        
      </div>
    </div>
  </div>
</template>

<script>
import preBox from 'components/preBox/preBox'
import expectBox from 'components/expectBox/expectBox'
export default {
  created() {
    this.axios.get('/movie/movieWait').then(response => {
      if (response.statusText === 'OK') {
        this.movieWait = response.data.data
        // console.log(this.movieWait)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  components: {
    'pre-box': preBox,
    'expect-box': expectBox
  },
  data() {
    return {
      movieWait: {}
    }
  }
}
</script>

<style lang="less" scoped>
.wait {
  width: 100%;
  overflow: hidden;
  h3 {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    background: #F6F6F6;
    padding-left: 12px;
    line-height: 28px;
    font-size: 12px;
  }
  .pre {
    width: 100%;
    height: 140px;
    overflow: hidden;
    .pre-list {
      padding: 12px 0 17px 8px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap; 
      .pre-box {
        display: inline-block;
        width: 40%;
        height: 85px;
        margin-left: 10px;
        overflow: hidden;
      }
    }
  }
  .expect {
    width: 100%;
    height: 230px;
    overflow: hidden;
    .expect-list {
      padding: 12px 0 17px 8px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap; 
      .expect-box {
        display: inline-block;
        width: 24%;
        height: 180px;
        margin-left: 10px;
        overflow: hidden;
      }
    }
  }
}
</style>
