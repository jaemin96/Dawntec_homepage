import React from 'react';
     
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
     //lifecycle에서 즉 컴포넌트가 초기화가 끝났을 경우 자동적으로 불러져 들어오는 함수임
    componentDidMount(){
        this.timerID = setInterval(() => { this.tick()}, 1000);
    }

     // 리소스 낭비 없애기 위해 Component가 unmount될 경우 이용이 끝났을 경우 interval을 종료한다.
     componentWillUnmount(){
        clearInterval(this.timerID);
    }

    /*
    goBack(){
        let nextDate = this.state.date;
        nextDate.setSeconds(nextDate.getSeconds()-10);
        this.setState({
            date: nextDate
        });
    }*/

    render(){
        return(
            <h3 className="clock_container">
                [{this.state.date.toLocaleTimeString()}]

                {/* <button onClick={this.goBack.bind(this)}>10초 뒤로가기 </button> */}
                
            </h3>
        );
    }
}

export default Clock;