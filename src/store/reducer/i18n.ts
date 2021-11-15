import {SETTING} from "../constants/i18n";


const INITIAL_STATE = {
    lang: 'zh_CN',
    translation:{}
}

export default function i18n (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SETTING:
            return {
                ...state,
                translation:action.payload
            }
        default:
            return state
    }
}