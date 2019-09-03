import React from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';
import Form from '../../components/CreatContestComponents/threeStepContestForm/threeStepContestForm'
import connect from "react-redux/es/connect/connect";
import {Redirect} from 'react-router';

//const STAGE = 1;

function CreateContest(props) {
    return (
        <div className={style.body}>
            {(props.stage===1)?<Redirect to="/contest_creating_choose_type"/>:<></>}
            <Header />
            <HeaderBottom/>
            <HeaderCreateContest/>
            <Form/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state,
        stage:state.contestReducers.contestStage,
        selectedContestTypes:state.contestReducers.selectedContestTypes
    };
};
export default connect(mapStateToProps)(CreateContest);
//export default CreateContest;

