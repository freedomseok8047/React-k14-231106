// state test 컴포넌트
// 클래스형 컴포넌트 rcc 구조 먼저 -> 가볍게 
// 구현부는 거의 동일
import React, { Component } from 'react';

class Count extends Component {
    //props 전달용, Component 부모클래스 초기화 같이 진행
    constructor(props){
        super(props);
        // state, 초기값 설정 
        this.state = {
            number:0,
            anotherNumber:0
        };
    }
    render() {
        // 비구조화 할당
        const {number, anotherNumber} = this.state
        return (
            <div>
            <h1>{number}</h1>
            <h2>다른 숫자 : {anotherNumber}</h2>
            <button
            // onClick 의 값으로 함수 사용
            onClick={
                () => {
                    this.setState({number : number +1})
                    // 한번 클릭시 , 값이 2씩 증가하도록 설정 
                    // 안되는 문제점 확인 (동작안함)
                    // this.setState({number : this.state.number +1})
                    // 해결책 : 객체 대신에 여기에 함수로 대체함.
                    // 해결책 
                    this.setState((prevState) => {
                        return {
                            number : prevState.number +1,
                        };
                        // state 값 변경 후, 특정 함수 호출하기.
                    }  , () =>{
                        console.log("state 값 변경 후, 함수 호출했어요.")
                    } );
                }
            }
            >
                +1
                </button>
                
                <button
            // onClick 의 값으로 함수 사용
            onClick={
                () => {
                    this.setState({number : number -1})
                }
            }>
                -1
                </button>

            </div>
        );
    }
}

export default Count;