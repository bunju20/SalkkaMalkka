// src/features/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    uid: '', // 유저아이디
    age: '', // 나이
    gender: '', // 성별
    finalPage: '', // 최종페이지
    mbti: '', // MBTI
    coupangButton: false, // 쿠팡버튼여부
    shareButton: false, // 공유버튼여부
  },
  reducers: {
    setUid(state, action) {
      state.uid = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setFinalPage: (state, action) => {
      state.finalPage = action.payload;
    },
    setMbti: (state, action) => {
      state.mbti = action.payload;
    },
    setCoupangButton: (state, action) => {
      state.coupangButton = action.payload;
    },
    setShareButton: (state, action) => {
      state.shareButton = action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const { setAge, setGender, setFinalPage, setMbti, setCoupangButton, setShareButton,setUid } = dataSlice.actions;

export default dataSlice.reducer;
