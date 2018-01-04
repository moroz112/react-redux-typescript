import * as React from 'react';
// import { Dropdown } from './Dropdown';
import { Header } from './Header';
import './App.css';

const menu = [
    {
        link: '/olo',
        label: 'olo'
    },
    {
        link: '/ccha',
        label: 'cha'
    },
    {
        link: 'atata',
        label: 'atata'
    }
];
export class App extends React.Component {
  render() {
      return (
          <div>
              <div>Yo</div>
              <Header items={menu}/>
          </div>
      );
  }
}
