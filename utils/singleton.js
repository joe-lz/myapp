/**
 * @description 单例工厂
 * @author  dongdong
 * @date 18/4/3.
 */

export default (Model) => {
  let model;
  return () => {
    if (!model) {
      model = new Model(...arguments);
    }
    return model;
  };
};
