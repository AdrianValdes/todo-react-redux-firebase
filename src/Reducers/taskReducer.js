import { toast } from 'react-toastify';

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      toast.success('added a task');
      return state;
    case 'ADD_TASK_ERR':
      toast.error('An error ocurred');
      return state;
    case 'REMOVE_TASK':
      toast.success('A task was deleted');
      return state;
    case 'REMOVE_TASK_ERR':
      toast.error('An error ocurred when deleting');
      return state;
    case 'TOGGLE_TASK':
      toast.success('A task was toggled');
      return state;
    case 'TOGGLE_TASK_ERR':
      toast.error('An error ocurred when toggling');
      return state;
    default:
      return state;
  }
};

export default taskReducer;
