import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { configure } from '@api/configure';
import './config/amplify'
import { SingIn } from './features/authentication/SignIn/SignIn';
import { SingUp } from './features/authentication/SignUp/SignUp';
import { BrainTreeCardPayment } from './features/payments/BrainTreeCardPayment';
import { BrainTreePaypalPayment } from './features/payments/BrainTreePaypalPayment';
import { BrainTreeVenmoPayment } from './features/payments/BrainTreeVenmoPayment';
import { BACKEND_URL } from './config/env';
import { CartScreen } from './features/cart/CartScreen/CartScreen';
import { fetchAdapter } from '@api/adapters/fetch.adapter';
import { ManualNoncePayment } from './features/payments/ManualNoncePayment';
import { addCartItem } from '@api/functions/cart/add-cart-item';
import { getGuestToken } from '@api/functions/auth/get-guest-token';
import { axiosAdapter } from '@api/adapters/axios.adapter';
import axios from 'axios';
import { getGuideGeo } from '@api/functions/guides/get-guide-geo';
// https://blog.logrocket.com/authentication-react-apps-aws-amplify-cognito/

// fetch('https://suho72277l.execute-api.us-east-1.amazonaws.com/dev/access-resource', {
//     method: 'POST'
// }).then(console.log)
configure({
  backendUrl: BACKEND_URL,
  
  fetcher: axiosAdapter(axios),//replace with axios
  tokenExtractor: () => '',
})

// undefined, // "eyJraWQiOiJIdlZaNlB6d1RGRXNqUDNNZWs2Y1NUdW43SUd0dlFWV1FwM0d5TjcrTHRZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyYmRlNTFiOS01NzgzLTQ5Y2EtODE1NS04MDM5YWRhODU2YmYiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xXzY4NGZhMjk1LWYzZWUtNDA1MS04YWE3LWU2N2Q4Zjc3ZTdkNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MjEyNjI3MTcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2NURk5HOTE4YiIsImV4cCI6MTYyMTMzMjM1OSwiaWF0IjoxNjIxMzI4NzU5LCJqdGkiOiJjZWFkZTBkYi0zYTQ1LTQ3NjEtOWVhMS01ZTU0MmU0ZjAyYjkiLCJjbGllbnRfaWQiOiI3YWRkMnQzdWZzczFrN2hrZmxoMTY1OGh1NCIsInVzZXJuYW1lIjoidGFsZXRza2kifQ.tJhzKlykK1Eg2PMIGccMVJfrfeZfnJGwl4iEYWILN0M2Fbg5LpABXdJkVoxpNrwFQNFzty7HRPxzBnxAfBnIetOC7rKLDklhC5qByHDPnFagHJsxMFpFOEXGTO5MD74V80QVK6LOMAo7K944dE6VjxbNh9jD-tfbRhS_D1ggYtjDkR7yyPFsUy_C0G1tCJFHP_JugeFpFBhRlELW26T9c2sCjhEYiOvQ0ayjs9whLCuEqOeVHqBBeJWPNDgnl1jus6ZxUzDfzyhxnej6OZkXWHaynxKImQq1ooxGnEqEvgF2ZzxJHOw0yYQ1ZKbBSH0_698lX--Wdl58NMJqmEAVPg",//localStorage.getItem('token')
getGuestToken().then(token => {
  console.log("token", token)
})
// addCartItem({
//   guideSku: 'TRAIL'
// }).then(console.log)


// getGuideGeo({ guideId: 'PCT08WhitneyPortal'}).then(console.log)
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/signIn">SignIn</Link>
          </li>
          <li>
            <Link to="/signOut">SignOut</Link>
          </li>
          <li>
            <Link to="/payments/braintree/credit_cards">Braintree CreditCard</Link>
          </li>
          <li>
            <Link to="/payments/braintree/venmo">Braintree Venmo</Link>
          </li>
          <li>
            <Link to="/payments/braintree/paypal">Braintree Paypal</Link>
          </li>
          <li>
            <Link to="/cart/">Cart</Link>
          </li>
          <li>
            <Link to="/manual/">Manual Nonce Payment</Link>
          </li>
          <li>
            <a href="/" onClick={() => localStorage.removeItem('token')}>Logout</a>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signUp">
          <SingUp />
        </Route>
        <Route path="/signIn">
          <SingIn />
        </Route>
        <Route path="/payments/braintree/credit_cards">
          <BrainTreeCardPayment />
        </Route>
        <Route path="/payments/braintree/venmo">
          <BrainTreeVenmoPayment />
        </Route>
        <Route path="/payments/braintree/paypal">
          <BrainTreePaypalPayment />
        </Route>
        <Route path="/cart/">
          <CartScreen />
        </Route>
        <Route path="/manual/">
          <ManualNoncePayment />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
