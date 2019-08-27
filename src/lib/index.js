import Panel from './panel';

const FoxiUI = {};
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
FoxiUI.install = function (Vue, Options) {
  Vue.prototype.$alert = (text) => {
    alert(text);
  };
  Vue.component(Panel.name, Panel);
};

export default FoxiUI;
