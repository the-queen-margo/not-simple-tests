import './Quiz.css';
import {React,useState} from 'react';

//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
//ЭЭЭЭЭ А ГДЕ ЙЮПИ ЙО!?????
export const Quiz = ({questions, hideTest}) => {
//мфссив квещонс
 
 const [currentQuestion, setCurrentOuestion] = useState(0)
 const [score, setScore] = useState(0)
 const [showScore, setShowScore] = useState(false)
 const handleAnswerOptionClick =(isCorrect) =>{
    if (isCorrect){
        setScore(score+1)
    }
    const nextQuestion = currentQuestion+1
    if (nextQuestion < questions.length){
        setCurrentOuestion(nextQuestion)
    } else {
        setShowScore(true)
    }
 }
 const refresh =()=>{
    setCurrentOuestion(0)
    setScore(0)
    setShowScore(false)
 }
return (
    
       <>  
        <div className="Quiz">
        {
            showScore?
            <div className='sectionScore'>
                {
         (score >= (0.6*questions.length))?

         <>
         <h3>Молодец, держи картинку</h3>
         <img className='image' src='https://media.tenor.com/arqlNu8gyJYAAAAC/cat-cat-jumping.gif'/> 
         </>
        :
         <>
         <h3>о̡̫̣̽͗͡ ̻̇н͚͓̘̏̾͑е̛̘̜̘͑̈́ӗ͙̣͂ет̨̢̛̛̥̯́̆ ͇͚̹̼͂͊̚͞т̤̰̀͑ӹ̩́ ̳͆о͖͛̓͜ш̩͛и̤͌͊̐͢͟͞ͅб̖̠̒͡с̟͇̦̻͊̈́́́я.̊͜.̢͖͑̈̈́͟.̤̜̻͆̂͝</h3>
         <img className='image' src='https://i.yapx.cc/HrII4.gif'/> 
         </>

                }
                <div> Правильных ответов {score} из {questions.length}</div>
                <button className='button' onClick={ refresh }>Пройти тест заново</button>
                <button className='button' onClick={ hideTest }>Вернуться к выбору теста</button>
                </div>
         
      
      
      :
    
        <div className= 'questionSection'>
            <div className='imageSection'>
                <img className = 'image' src = {questions[currentQuestion].questionImage} alt='Image'/>
                </div>
                <div className='questionCount'>
                    <span>Вопрос {currentQuestion+1}</span>/{questions.length}
                    </div>
                    <div className='questionText'>
                        {questions[currentQuestion].questionText}
                        </div>
                        <div className='answerSection'>
         {questions[currentQuestion].answerOptions.map((item)=>(
             <button
             onClick={()=>handleAnswerOptionClick(item.isCorrect)}
             className={'button'}
             >{item.answerText}</button>
         ))}
      </div>
            </div>
             
     
       
          
         }
           </div>
          </>

);

}
 