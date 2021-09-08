import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    body {
      background-image: url(assets/heroes/1455.jpg);
      background-repeat: no-repeat;
      /*Centramos el fondo al centro*/
      background-position: center;
      /*Y le decimos que siempre ocupe el ancho y el alto con esto*/
      background-size: cover;
      font-family: Arial, Helvetica, sans-serif;
    }
    .container {
      background-color: rgba(225,225,225,0.1);
      backdrop-filter: blur(20px);
      border: solid 1px  rgba(255,255,255,05);
      border-radius: 5px;
      width: 70%;
      margin: 0 auto;

      box-shadow: 0 10px 20px 5px  rgba(0,0,0,0.05);
      overflow: hidden;
      display: flex;
    }
      .sidebar{
        background-color: rgba(0,0,0,0.2);
        padding: 20px;
        width: 30%;
      }

      .sidebar ul{
        padding: 0;
        margin: 20px 0;
        list-style: none;
        text-align: left;
      }

      .sidebar ul li a {
        color: rgba(255,255,255,0.8);
        display: block;
        text-decoration: none;
        padding: 12px 10px;
      }

      .sidebar ul li a:hover{
        color: white;
        border-radius: 5px;
        background-color: #0084ff;
        
        box-shadow: 0 5px 10px 2px rgba(10, 137,255, 0.5);
      }

      .profile-card {
        color: white;
        text-align: center;
        margin-top: 10px;
      }

      .profile {
        border-radius: 50%;
        width: 100px;
        box-shadow: 0 10px 20px 5px rgba(0,0,0,0.3);
      }

      main{
        padding: 20px;
        width: 70%;
      }

      main .header h2{
        color: rgba(0,0,0,0.7);
        font-size: 48px;
        margin: 10px 0;
      }

      main .header span{
        color: rgba(0,0,0,0.5);
        font-size: 18px;
        margin: 10px 0;
        font-weight: bolder;
        display:block;
      }

      .card {
        border-radius: 5px;
        box-sizing: border-box;
        width: 100%;
        margin: 10px 0 20px 0;
        align-items: center;
        overflow: hidden;
        border: solid 1px  rgba(225,225,225,0.5);
        box-shadow: 0 5px 15px 2px rgba(0,0,0,0.15);
      }

      .card .content {
        display: flex;
        align-items: center;
        background: white;
        padding: 20px;
      }

      .card .left {
        padding-right: 15px;
      }
      
      .card .right{
        width: 100%;
      }

      .card .right .task {
        font-size: 22px;
      }

      .card .right .status {
        padding: 5px 0;
        font-size: 14px;
        color: #888;
      }

      .card .right .progress {
        background-color: #ddd;
        width: 100%;
        height: 10px;

      }

      .card .right .progress .fill {
        height: 10px;
        margin: 10px 0;
      }

      .card .right .progress .fill.fill-20 {
        background-color: rgba(255,56,21);
        width:20%;
      }

      .card .right .progress .fill.fill-40 {
        background-color: rgba(255,181,21);
        width:40%;
      }

      .card .right .progress .fill.fill-100 {
        background-color: rgba(87,255,21);
        width:100%;
      }

      .card .buttons {
        backdrop-filter: blur(5px);
        text-align: right;
        padding: 20px;
      }

      .btn {
        background: #0084ff;
        border: none;
        font-weight: bolder;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
      }
      .btn:hover {
        background-color #118cff;
        box-shadow: 0 5px 10px 2px rgba(10,137, 255, 0.5);

      }
  `
  ]
})
export class LoginComponent {

  constructor( private router: Router,
                private authService: AuthService) { }

  login(){

    this.authService.login()
    .subscribe( resp => {
      console.log( resp);

      if( resp.id){
         this.router.navigate(['./heroes']);
      }
      
    })
 
  }

}
