export const makeHashReducer = (
  initState,
  pKey,
  valueKey,
  setActions,
  deleteActions,
  loadKey,
  loadAction
) =>
  (state = initState, action) => {
    if (setActions.includes(action.type)) {
      return { ...state, [action[valueKey][pKey]]: action[valueKey] };
    } else if (deleteActions.includes(action.type)) {
      const { [action[valueKey][pKey]]: __, ...newState } = state;
      return newState;
    } else if (action.type === loadAction) {
      return loadKey.split('.').reduce((obj, key) => obj[key], action);
    }
    return state;
  };

export const makeArrayReducer = (
  initState,
  valueKey,
  insertAction,
  removeAction,
  loadKey,
  loadAction
) =>
  (state = initState, action) => {
    if (action.type === insertAction) {
      return [
        ...state,
        valueKey.split('.').reduce((obj, key) => obj[key], action)
      ];
    } else if (action.type === removeAction) {
      return state.filter(value =>
        value !== valueKey.split('.').reduce((obj, key) => obj[key], action));
    } else if (action.type === loadAction) {
      return loadKey.split('.').reduce((obj, key) => obj[key], action);
    }
    return state;
  };
