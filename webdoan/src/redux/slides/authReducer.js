// trạng thái ban đầu của reducer
const initialState = {
  username: null,
  //trạng thái đăng nhập
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // xử lý action set_username để cập nhật username
    case 'SET_USERNAME':
      return { ...state, username: action.payload, isAuthenticated: true };
    // xử lý logout thành false để trả về nút đăng nhập ban đầu
    case 'LOGOUT':
      return { ...state, username: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
