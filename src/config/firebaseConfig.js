import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC2yXhJZf9jUs04ERo4i8lVvsBYGWByKkA',
  authDomain: 'todo-react-redux-fbe59.firebaseapp.com',
  databaseURL: 'https://todo-react-redux-fbe59.firebaseio.com',
  projectId: 'todo-react-redux-fbe59',
  storageBucket: 'todo-react-redux-fbe59.appspot.com',
  messagingSenderId: '455992528766',
  appId: '1:455992528766:web:5ffb92c46fd2b896a36d2f',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
