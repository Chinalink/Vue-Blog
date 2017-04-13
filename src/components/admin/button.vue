<template>
  <button type="" class="btn"
    :class="['btn-' + type, 'btn-' + size, {'is-disabled':disabled}]"
    @click="handleBack" :disabled="disabled"
  >
    <span>
      <slot></slot>
      <slot name="icon">
        <i v-if='icon' class="iconfont" :class="'ic-'+icon"></i>
      </slot>
    </span>
  </button>
</template>

<script>
/**
* xd-button
* @module components/button
* @desc 按钮
* @param {string} [type=default] - 显示类型，接受 default, primary, danger, success, search
* @param {boolean} [disabled=false] - 禁用
* @param {string} [size=normal] - 尺寸，接受 normal, small, large
* @param {string} [icon] - 图标，（传入不带前缀的图标类名，最后拼接成 .ic-xxx）
* @param {slot} - 显示文本
* @param {slot} [icon] 显示图标
*
* @example
* <xd-button size="large" icon="back" type="primary">按钮</xd-button>
*/
export default {
  name: 'button',
  data () {
    return {

    }
  },
  methods: {
    handleBack (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    icon: String,
    disabled: Boolean,
    size: {
      size: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>
.btn{
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
}
/*尺寸*/
.btn-normal{
  padding: 5px 10px;
}
.btn-small{
  padding: 2.5px 5px;
}
.btn-large{
  padding: 7.5px 15px;
}
/*类型*/
.btn-default{
  border-color:#e1e1e1;
  background-color:#fff;
  color: #232323;
}
.btn-success{
  border-color:#18a689;
  background-color:#18a689;
}
.btn-search{
  border-top-left-radius: 0;
  border-bottom-left-radius:0;
  border-color:#18a689;
  background-color:#18a689;
}
.btn-primary{
  border-color:#1a7bb9;
  background-color:#1a7bb9;
}
.btn-danger{
  border-color:#ec4758;
  background-color:#ec4758;
}
</style>
