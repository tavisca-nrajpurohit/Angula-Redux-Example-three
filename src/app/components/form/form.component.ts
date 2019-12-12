import { Component, OnInit, Input } from '@angular/core';
import {store, appState} from '../../store';
import {ACTION_usernameIsFocussed,ACTION_usernameNotFocussed,ACTION_usernameValueChanged,ACTION_passwordIsFocussed,ACTION_passwordNotFocussed,ACTION_passwordValueChanged} from '../../store/actions'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Input() id;
  public username:string ="";
  public password:string ="";
  public displayState:any;

  ngOnInit(){
    this.updateFromState();
    store.subscribe(()=>{
    console.log("State Updated!"+this.id);
    console.log(store.getState());
    this.updateFromState();
    });
  }

  SubmitForm(){
    alert("Username: "+this.username+"\n Password: "+this.password);
  }

  updateFromState(){
    this.displayState = store.getState()[this.id];
    this.username = this.displayState.username.value;
    this.password = this.displayState.password.value;
  }

  usernameIsFocussed(){
    store.dispatch(ACTION_usernameIsFocussed(this.id));
  }
  passwordIsFocussed(){
    store.dispatch(ACTION_passwordIsFocussed(this.id));
  }
  usernameNotFocussed(){
    store.dispatch(ACTION_usernameNotFocussed(this.id));
  }
  passwordNotFocussed(){
    store.dispatch(ACTION_passwordNotFocussed(this.id));
  }
  usernameValueChanged(){
    store.dispatch(ACTION_usernameValueChanged(this.username,this.id));
  }
  passwordValueChanged(){
    store.dispatch(ACTION_passwordValueChanged(this.password,this.id));
  }
}
