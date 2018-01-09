import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import './index.css';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root') as HTMLElement
);

interface Hot {
  accept(path: string, cb: Function): void;
}
interface Module extends NodeModule {
  hot: Hot;
}

if ((module as Module).hot) {
  (module as Module).hot.accept('./App.tsx', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(
          <AppContainer>
              <NextApp />
          </AppContainer>,
          document.getElementById('root')
      );
  });
}

registerServiceWorker();
