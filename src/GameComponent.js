import React, { Component } from 'react'
import Fail from './img/Fail.png'
import Pet from './img/pet.png'
import Question from './img/Question.png'
import Scissors from './img/Scissors.png'
import Stone from './img/Stone.png'
import './GameComponent.css'

export default class GameComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         PlayerValue: Question,
         EnemyValue: Question,
         Resualt: ""
      }

      this.StoneValue = this.StoneValue.bind(this);
      this.ScissorsValue = this.ScissorsValue.bind(this);
      this.PetValue = this.PetValue.bind(this);
    }
    
    StoneValue(){
        function rnd(max){
            return Math.floor(Math.random() * max);
        }

        let a = rnd(3)
        let en, res;
        let b = 0;
        if(a == 0){
            en = Stone;
            res = "Ничья"
        } else if(a == 1){
            en = Scissors;
            res = "Победа"
        } else if(a == 2){
            en = Pet;
            res = "Поражение"
        }
        else{
            en = Fail;
            res = "Ошибка"
        }

        this.setState({
            PlayerValue: Stone,
            EnemyValue: en,
            Resualt: res
        })
    }
    ScissorsValue(){
        function rnd(max){
            return Math.floor(Math.random() * max);
        }

        let a = rnd(3)
        let en, res;
        let b = 0;
        if(a == 0){
            en = Stone;
            res = "Поражение"
        } else if(a == 1){
            en = Scissors;
            res = "Ничья"
        } else if(a == 2){
            en = Pet;
            res = "Победа"
        }
        else{
            en = Fail;
            res = "Ошибка"
        }

        this.setState({
            PlayerValue: Scissors,
            EnemyValue: en,
            Resualt: res
        })
    }
    PetValue(){
        function rnd(max){
            return Math.floor(Math.random() * max);
        }

        let a = rnd(3)
        let en, res;
        let b = 0;
        if(a == 0){
            en = Stone;
            res = "Победа"
        } else if(a == 1){
            en = Scissors;
            res = "Поражение"
        } else if(a == 2){
            en = Pet;
            res = "Ничья"
        }
        else{
            en = Fail;
            res = "Ошибка"
        }

        this.setState({
            PlayerValue: Pet,
            EnemyValue: en,
            Resualt: res
        })
    }

  render() {
    return (
      <div>
        <img className='GameComponent-icon' src={Stone} onClick={this.StoneValue}/>
        <img className='GameComponent-icon' src={Scissors} onClick={this.ScissorsValue}/>
        <img className='GameComponent-icon' src={Pet} onClick={this.PetValue}/>
        <br />
        <br />
        <img src={this.state.PlayerValue} />
        <br />
        <h3>{this.state.Resualt}</h3>
        <br />
        <img src={this.state.EnemyValue} />
      </div>
    )
  }
}
