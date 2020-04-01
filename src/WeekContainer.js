import React from 'react';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/weather?q=Osijek,cro&APPID=d5a5d8c6addc6e04e0ee87ae7c978c86`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
      </div>
    )
  }
}

export default WeekContainer;