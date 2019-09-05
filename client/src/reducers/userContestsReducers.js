import ACTION from '../actions/actiontsTypes';

const initialState = {
   contests:null,
    numberInLaunch:0,
    numberInDraft:0,
    InLaunch:null,
    InDraft:null,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_USER_CONTESTS: {
            console.log(action);
            return {
                ...state,
                contests:action.data,
                numberInDraft:action.numberInDraft,
                numberInLaunch:action.numberInLaunch,
                InLaunch:action.InLaunch,
                InDraft:action.InDraft,

            };
        }
        default: {
            return state;
        }
    }
}