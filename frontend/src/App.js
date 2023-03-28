import React from 'react';
import './App.css';
import "@sendbird/uikit-react/dist/index.css"
import SendbirdApp from '@sendbird/uikit-react/App';
import usePushNotifications from "./usePushNotifications";

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const NICK_NAME = process.env.REACT_APP_NICK_NAME;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  usePushNotifications();

  return (
    <div className="App">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICK_NAME}
        accessToken={ACCESS_TOKEN}
      />
    </div>
  );
}

export default App;
