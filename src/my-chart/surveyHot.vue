<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['日期', '相关报道量', '评论量', '点赞量', '转载量'],
        rows: [
          { '日期': '1月1日', '相关报道量': 1523, '评论量': 1523, '点赞量': 12, '转载量': 100 },
          { '日期': '1月2日', '相关报道量': 1223, '评论量': 1523, '点赞量': 345, '转载量': 100 },
          { '日期': '1月3日', '相关报道量': 2123, '评论量': 1523, '点赞量': 70, '转载量': 100 },
          { '日期': '1月4日', '相关报道量': 4123, '评论量': 1523, '点赞量': 31, '转载量': 100 }
        ]
      }
      this.chartSettings = {
        stack: { '售价': ['相关报道量', '评论量'] },
        area: true
      }
    }
  }
</script>