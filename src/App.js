import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import syb from "./components/sub"

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']); 
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    //state 변경 --> 복사본 생성 값공유x state를 deep copy해서 수정
    var newArray = [...글제목]; //복사
    newArray[0] = '여자코트 추천'; //변경사항 반영
    글제목변경(newArray); //변경함수()에 값 넣기
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <button onClick={ 제목바꾸기 }> {글제목[0]} <span></span> { 따봉 }</button>
      </div>
    </div>
  );
}




export default App;
