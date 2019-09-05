const yup = require('yup');
const schema = require('../models/userSchema');
const promises = () => new Promise(resolve => resolve());
function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
const asyncValidate = (values /*, dispatch */) => {
    return promises().then(async () => {
       // console.log("i'm here",values);
        const errors = {};
        try{
            if(!values.titleOfContest){
                errors.titleOfContest = 'Please enter the title of proceed';
            }
           /* for (let prop in values) {
                if(values.hasOwnProperty(prop)){
                    errors.prop= (await yup.reach(schema, 'email').isValid(values.email))? {}:{};
                }
            }*/

          /*  const resEmail=await yup.reach(schema, 'email').isValid(values.email);
            const resFirstName=await yup.reach(schema, 'firstName').isValid(values.firstName);
            const resLastName=await yup.reach(schema, 'lastName').isValid(values.lastName);
            const resDisplayName=await yup.reach(schema, 'displayName').isValid(values.displayName);
            const resPasswordConfirmation=await yup.reach(schema, 'password').isValid(values.passwordConfirmation);
            const resPassword=await  yup.reach(schema, 'password').isValid(values.password);
            console.log('Check',resEmail,resFirstName,resLastName,resDisplayName,resPassword,resPasswordConfirmation);

            if (!values.firstName) {
                errors.firstName = 'Field cannot be empty';}else
            if(!resFirstName){
                errors.firstName = 'Must be 8 characters or more';
            }

            if (!values.lastName) {
                errors.lastName = 'Field cannot be empty'}else
            if(!resLastName){
                errors.lastName = 'Must be 8 characters or more';
            }

            if (!values.email) {
                errors.email = 'Required'} else
            if(!resEmail){
                errors.email = 'Email is not valid format';
            }

            if (!values.displayName) {
                errors.displayName = 'Required'}else
            if(!resDisplayName){
                errors.displayName = 'Must be 10 characters or more';
            }

            if(!values.password){
                errors.password = 'Password required';}
            else if(!resPassword){
                errors.password = 'Password is not valid. Use password with at least 8 chars,one lowercase and uppercase char and 1 number or special char ';
            }
            if(!values.passwordConfirmation){
                errors.passwordConfirmation = 'Password Confirmation required';}
            else if(!(values.password===values.passwordConfirmation) && resPassword){
                errors.passwordConfirmation = 'Password confirmation needs to match original password';}*/
        }
        catch (e){

        }
      //  console.log(!values.titleOfContest,!!values.titleOfContest);

        //console.log(isEmpty(errors),"errors");
        if(isEmpty(errors)){
            return null
        }else {
            return await Promise.reject(errors)
        }
     // return await Promise.reject(errors)
    });
};

export default asyncValidate;