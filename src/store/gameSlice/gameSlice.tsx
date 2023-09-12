import {  createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    value : number
    answers: number[]
    pictureNum: number,
    truePictureAnswer: number[],
    win:  string ,
    checkedVal: boolean,
    checkedTime: boolean,
    smt: number[],
    score: boolean[]


}

const initialState: CounterState = {
    value: 0,
    answers: [],
    pictureNum: 110,
    truePictureAnswer: [],
    win: '',
    checkedVal: false,
    checkedTime: false,
    smt: [1],
    score: []
  }



export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    //artist
    increment: (state) => {
      
     state.value += 1
    },

    reset: (state) =>  {
      state.value = 0
    },
    trueAnswer: (state) =>{
      state.answers.push(1)
    },

    


    resetArr: (state) =>{
      state.answers = []
    },

    //picture
    pictureIncrement: (state) =>{
      state.pictureNum += 1
    }
    ,
    resetPicture: (state) =>{
      state.pictureNum = 0
    },

    truePictureAnswer: (state) =>{
      state.truePictureAnswer.push(1)
    },
    resetPictureArr: (state) =>{
      state.truePictureAnswer = []
    },
    //settings

    //sound
    turnOnVolume: (state) =>{
      state.checkedVal = true
    },
    turnOffVolune: (state) =>{
      state.checkedVal = false
    },
    //time
    turnOnTime: (state) => {
      state.checkedTime = true
    },
    turnOffTime: (state) =>{
      state.checkedTime = false
    },
    // smt
    smt: (state) => {
      state.smt.push(1)
    },

    //score
    scoreTrue: (state) =>{
      state.score.push(true)
    },
    scoreFalse: (state) =>{
      state.score.push(false)
    },
    resetScore: (state) =>{
      state.score = []
    }

  },

  

  
  })

// Action creators are generated for each case reducer function
export const { increment, reset, trueAnswer, resetArr, pictureIncrement, resetPicture, truePictureAnswer,resetPictureArr,turnOnVolume, turnOffVolune, turnOnTime, turnOffTime, smt, scoreFalse, scoreTrue, resetScore} = gameSlice.actions

export default gameSlice.reducer