import { ALERT_ACTION, ALERT_ANSWER, HIDE_ALERT, SHOW_ALERT } from "../types"


const handlers = {
[SHOW_ALERT]: (state, {payload}) =>(
    {...payload, visible: true, answer: ''}
),
[HIDE_ALERT]: state =>(
    {...state, visible: false, answer: ''}
),
[ALERT_ANSWER]: (state, {payload}) => (
    {...state, ...payload, visible: false}
),
[ALERT_ACTION]: (state, {payload}) => (
    {...state, actionArgs: payload.args, action: payload.action}
),
DEFAULT: state => state
}


export const alertReduser = (state, action) => {
    const handler  = handlers[action.type] || handlers.DEFAULT
return handler(state, action)
}