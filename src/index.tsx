import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import { Game } from './components/Game';

ReactDOM.render(<Game rows={3} cols={3} />, document.getElementById('root'));
