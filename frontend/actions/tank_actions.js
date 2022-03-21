import * as TankAPIUtil from '../util/api/tank_api_util'

export const RECEIVE_TANK = "RECEIVE_TANK";
export const RECEIVE_TANKS = "RECEIVE_TANKS";
export const RECEIVE_TANK_ERRORS = "RECEIVE_TANK_ERRORS";

// ACTION CREATORS
const receiveTank = tank => {
  return {
    type: RECEIVE_TANK,
    tank
  }
}

const receiveTanks = tanks => {
  return {
    type: RECEIVE_TANKS,
    tanks
  }
}

const receiveTankErrors = errors => {
  return {
    type: RECEIVE_TANK_ERRORS,
    errors
  }
}

// THUNK ACTION CREATORS
export const createTank = tank => dispatch => {
  return TankAPIUtil.createTank(tank).then(tank => {
    dispatch(receiveTank(tank))
  }, err => (
    dispatch(receiveTankErrors(err.responseJSON))
  ))
}