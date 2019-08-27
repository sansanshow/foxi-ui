<template>
<div class="fx-number-panel-container">
  <div class="fx-number-panel" v-if="visiable">
    <p class="fx-number-panel-txt">{{checkedNumber}}</p>
    <ul class="fx-number-panel-grid">
      <li v-for="(item, index) in keys" @click="clickThisNumber($event, index)" :key="index" class="fx-number-panel-btn">{{ item }}</li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'FxPanel',
  data() {
    return {
      visiable: true,
      checkedNumber: '',
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, '删除', 0, '确认'],
    };
  },
  methods: {
    clickThisNumber(e, index) {
      const txt = e.currentTarget.innerHTML;
      if (index === 9) { // 删除
        if (this.checkedNumber.length) this.checkedNumber = this.checkedNumber.substr(0, this.checkedNumber.length - 1);
      } else if (index === 11) {
        this.$emit('comfirm', this.checkedNumber);
      } else {
        this.checkedNumber = this.checkedNumber.concat(e.currentTarget.innerHTML);
      }
    },
  },
};
</script>
<style scoped>
.fx-number-panel {
  color: #f2f3f4;
  padding: 10px;
  width: 100%;
  height: 268px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.fx-number-panel-txt {
  line-height: 24px;
  min-height: 30px;
  font-size: 20px;
  color: #333;
  width: 100%;
}
.fx-number-panel-grid {
  display: grid;
  grid-row-gap: 3%;
  grid-column-gap: 10px;
  grid-template-columns: repeat(3, 31.3334%);
  grid-template-rows: repeat(4, 50px);
  grid-template-areas: 'a a a'
                      'b b b'
                      'c c c'
                      'd d d';
}
.fx-number-panel-grid li {
  list-style: none;
  border-radius: 5px;
  background: #ccc;
  line-height: 50px;
  color: #333;
  font-size: 20px;
}
</style>
