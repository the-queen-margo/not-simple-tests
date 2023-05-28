import { Quiz } from './components/Quiz/Quiz';
import './App.css';
import {QuizPanel } from './components/QuizPanel/QuizPanel'
import {React, useState} from 'react'
import { Header } from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import {Main} from './components/Main/Main';
import {Register} from './components/Register/Register';
const quizArr = [  
  {
    quizImage: 'https://inyminy.com/wp-content/uploads/2016/07/19.-adorable-baby-monkey-who-lives-in-the-Ubud-Monkey-Forest-in-Bali.jpg', 
    quizName: 'Тест на бибизяну', 
     questions: [
      {
          questionImage: 'https://sportishka.com/uploads/posts/2022-08/1661443032_29-sportishka-com-p-bitseps-negra-oboi-38.jpg',
          questionText:'кто это?',
          answerOptions: [
          {answerText: 'negr',isCorrect: true},
          {answerText: 'afroboy',isCorrect: false},
          ]
      },
      {
          questionImage: 'https://live.staticflickr.com/1262/1270321906_8fdf96f7a3_b.jpg',
          questionText:'почему он такой крутяш?',
          answerOptions: [
          {answerText: 'так бог сказал',isCorrect: true},
          {answerText: 'так я сказал',isCorrect: false},
          {answerText: 'потому что',isCorrect: false},
          ]
      },
      {
          questionImage: 'https://cdn.culture.ru/images/76588663-124f-5d07-a315-bdf807a693b6',
          questionText:'кто убил джона кеннади?',
          answerOptions: [
          {answerText: 'Ли Харви Освальд',isCorrect: true},
          {answerText: 'он сам',isCorrect: false},
          {answerText: 'z',isCorrect: false},
      ]
      },
      {
        questionImage: 'https://cdn.vox-cdn.com/thumbor/YacNA6c_EyUgO8baygXu_NKkWwA=/0x20:640x380/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48798609/og-dre.0.0.jpg',
        questionText:'кто это?',
        answerOptions: [
        {answerText: 'negr',isCorrect: false},
        {answerText: 'afroboy',isCorrect: false},
        {answerText: 'D. Dre',isCorrect: false}
        ]
    }
      
  
     
      //еще один вопрос и тддд
  ]
  },
  {
    quizImage: 'https://4tololo.ru/sites/default/files/images/20162001154423_0.jpg?itok=Tb_Y-IZ', 
    quizName: 'Тест  на тру homie', 
     questions: [
      {
          questionImage: 'https://weliveentertainment.com/wp-content/uploads/2019/01/michael-jackson-1.jpg',
          questionText:'кто это?',
          answerOptions: [
          {answerText: 'negr',isCorrect: true},
          {answerText: 'afroboy',isCorrect: false},
          {answerText: 'the king of pop',isCorrect: true}
          ]
      },
      {
          questionImage: 'https://live.staticflickr.com/1262/1270321906_8fdf96f7a3_b.jpg',
          questionText:'почему он такой крутяш?',
          answerOptions: [
          {answerText: 'так бог сказал',isCorrect: true},
          {answerText: 'так я сказал',isCorrect: false},
          {answerText: 'потому что',isCorrect: false},
          ]
      },
      {
          questionImage: 'https://cdn.culture.ru/images/76588663-124f-5d07-a315-bdf807a693b6',
          questionText:'кто убил джона кеннади?',
          answerOptions: [
          {answerText: 'Ли Харви Освальд',isCorrect: true},
          {answerText: 'он сам',isCorrect: false},
          {answerText: 'z',isCorrect: false},
      ]
      },
      {
        questionImage: 'https://cdn.vox-cdn.com/thumbor/YacNA6c_EyUgO8baygXu_NKkWwA=/0x20:640x380/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/48798609/og-dre.0.0.jpg',
        questionText:'кто это?',
        answerOptions: [
        {answerText: 'negr',isCorrect: false},
        {answerText: 'afroboy',isCorrect: false},
        {answerText: 'D. Dre',isCorrect: false},
        ]
    }
      
  
     
      //еще один вопрос и тддд
  ]
  },
  {
  quizImage: 'https://topwar.ru/uploads/posts/2023-03/elena-glinskaja.jpg', 
  quizName: 'проверь, являешься ли ты русичем', 
   questions: [
    {
        questionImage: 'https://sportishka.com/uploads/posts/2022-08/1661443032_29-sportishka-com-p-bitseps-negra-oboi-38.jpg',
        questionText:'кто это?',
        answerOptions: [
        {answerText: 'negr',isCorrect: true},
        {answerText: 'afroboy',isCorrect: false},
        ]
    },
    {
        questionImage: 'https://cont.ws/uploads/pic/2020/1/1-39.jpg',
        questionText:'кто это?',
        answerOptions: [
        {answerText: 'протопоп сельвестр',isCorrect: true},
        {answerText: 'протопоп аввакум',isCorrect: false},
        {answerText: 'иван панфилов',isCorrect: false},
        ]
    },
    {
        questionImage: 'https://cdn1.ozone.ru/multimedia/1018090521.jpg',
        questionText:'о чем эта книга',
        answerOptions: [
        {answerText: 'о том как воспитывать детей, следить за женой',isCorrect: true},
        {answerText: 'о технологии постройки домов',isCorrect: false},
        {answerText: 'о том как содержать дом в чистоте',isCorrect: false},
    ]
    },
    {
      questionImage: 'https://kartinkin.net/uploads/posts/2022-03/1647622650_20-kartinkin-net-p-rusichi-kartinki-21.jpg',
      questionText:'любимая еда русичей?',
      answerOptions: [
      {answerText: 'вода из байкала',isCorrect: true},
      {answerText: 'сало',isCorrect: false},
      {answerText: 'водка',isCorrect: false}
      ]
  }
    

   
    //еще один вопрос и тддд
]
}
    ]
function App() {
  
  const [quizVisibility,setQuizVisibility]= useState(false)
  const [tTest, setTTest]= useState([])
  const showTest = (elem) =>{
    setQuizVisibility(true)
    setTTest(elem.questions)
  }
  const hideTest = () =>{
    setQuizVisibility(false)
  }
  return (
    <div className="App">
        <Header/> 
      <Routes>
        <Route path='/test'element={ <>
     
    {quizVisibility?
    <Quiz questions={tTest} hideTest = {hideTest}/>
    :
    <div className="panel">
      {quizArr.map((elem)=>
      <QuizPanel
      image = {elem.quizImage}
      name = {elem.quizName}
      showTest = {() => showTest(elem)}
      />
      )}
      </div>
  }</>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/' element={<Main/>}/>
  </Routes>
  </div>
  );
}
 

export default App;


/*

*/