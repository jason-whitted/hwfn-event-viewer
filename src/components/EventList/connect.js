import { getMeta, selectMeta } from 'store/meta';

const select = state => ({
  meta: selectMeta(state),
});

const boundActions = {
  getMeta,
};

export default [select, boundActions];
