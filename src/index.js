import App from './app';
// import { Effect } from './examples/Effect';
import { render, createElement } from './main/render';
import './app/style/index.scss';

render(<App />, document.getElementById('app'));
