import React from 'react';
import apiConfig from './apiKeys';

class WeekContainer extends React.Component {
  render() {

    const weatherURL =
    `http://api.openweathermap.org/data/2.5/weather?q=Osijek,cro&APPID=d5a5d8c6addc6e04e0ee87ae7c978c86`

    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeekContainer;