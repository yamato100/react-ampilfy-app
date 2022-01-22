import './App.css';
import Amplify from 'aws-amplify';
import { AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
       <AmplifySignOut />
      <h2>コンポーネント</h2>
    </div>
  );
}

export default withAuthenticator(App);
