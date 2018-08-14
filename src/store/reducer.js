import * as actionTypes from './actions/actionTypes'
import {a1SanityCheck, a2SanityCheck, p1SanityCheck, p2SanityCheck, s1SanityCheck, s2SanityCheck} from "./SanityChecks"

const initialState = {

    mod: [{type:'a', size: 2}, {type:'d', size: 0}, {type:'s', size: 1}, {type:'p', size: 1}],
    rowAmount: 0,
    general2: [],
    general1: [],
    project2: [],
    project1: [],
    seminar2: [],
    seminar1: [],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DROPDOWN: return changeDropdown(state, action)
        case actionTypes.SORT_DATA: return sortData(state, action)
        case actionTypes.SET_DATA: return setData(state, action)
        case actionTypes.INIT_SETUP: return  Object.assign({}, state, initSetup(state, action))
      default:
        return sanitizeData(state, state.rowAmount)
    }
}

const sanitizeData = (data, ra) => {
  return {
    ...data,
    general1: a1SanityCheck(data.general1, ra),
    general2: a2SanityCheck(data.general2, ra),
    project1: p1SanityCheck(data.project1, ra),
    project2: p2SanityCheck(data.project2, ra),
    seminar1: s1SanityCheck(data.seminar1, ra),
    seminar2: s2SanityCheck(data.seminar2, ra),
    rowAmount: ra
  }
}

const changeDropdown = (state, action) => {
  const newMod = state.mod.slice()
  if(state.mod[action.col].size === action.element.size){
    newMod.splice(action.col, 1, action.element)
  }else {
    newMod.splice(action.col - (action.col % 2), 2, action.element,
      action.element.size === 2 ? {type: action.element.type, size: 0} : {type: 'd', size: 1})
  }return {
    ...state,
    mod: newMod
  }
}

const initSetup = (state, action) => {
  let newState = {}
  Object.keys(action.data).forEach(dat => {
    newState[dat] = action.data[dat]
  })
  console.log(newState)
  return sanitizeData(newState, newState.general1.length)
}

const setData = (state, action) => {
    return {
      ...state,
      rowAmount: action.length,
      [action.col]: action.data
    }
}

const sortData = (state, action) => {
    const n = state.rowAmount
    const sortedState = state.slice()
    mergeSort(sortedState, 0, n-1, action)
    return sortedState
}

const mergeSort = (array, left, right, action) => {
    if(left < right) {
        const middle = Math.round((left+right) / 2)
        mergeSort(array, left, middle, action)
        mergeSort(array, middle+1, right, action)
        merge(array, left, middle, right, action)
    }
}
const merge = (array, left, middle, right, action) => {
    const temp = []
    let leftSide = left
    const rightSide = middle + 1
    let i = 1

    while( leftSide <= middle && rightSide <= right ){
        if(compare(array[leftSide], array[rightSide], action.key, action.set)){  //  array[leftSide] <= array[rightSide]
            temp[i] = array[leftSide]
            leftSide++
        } else {
            temp[i] = array[rightSide]
        }
    }
}

const compare = () => {
    return true
}






export default reducer;