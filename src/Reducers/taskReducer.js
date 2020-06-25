const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      console.log('added a task');
      return state;
    case 'ADD_TASK_ERR':
      console.log('An error ocurred');
      return state;
    default:
      return state;
  }
};

export default taskReducer;
