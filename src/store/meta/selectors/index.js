import { shouldUpdate } from 'common';

export const selectMeta = state => state.meta.data;

export const selectMetaIsLoading = state => state.meta.loading;

export const selectMetaShouldUpdate = force => state => {
  const { loading, data, expires } = state.meta;

  return shouldUpdate({
    force,
    expired: expires < Date.now(),
    empty: !data,
    loading,
  });
}
