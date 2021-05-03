import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="signupSection">
  <div class="info">
    <h2>Enjoy with us</h2>
    <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
    <p>The Future Is Here</p>
  </div>
  <form action="#" method="POST" class="signupForm" name="signupform">
    <h2>Sign Up</h2>
    <ul class="noBullet">
      <li>
        <label for="username"></label>
        <input type="text" class="inputFields" id="username" name="username" placeholder="Username" value="" oninput="return userNameValidation(this.value)" required></input>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value="" oninput="return passwordValidation(this.value)" required/>
      </li>
      <li>
        <label for="email"></label>
        <input type="email" class="inputFields" id="email" name="email" placeholder="Email" value="" required/>
      </li>
      <li id="center-btn">
        <input type="submit" id="join-btn" name="join" alt="Join" value="Join"></input>
      </li>
    </ul>
  </form>
</div>
  );
}

export default App;
