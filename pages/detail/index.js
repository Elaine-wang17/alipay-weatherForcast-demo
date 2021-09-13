import { request, getLocation } from '../../utils/index';

Page({
  data: {
    weatherInfo: {},
    futureWeatherInfo :[]
  },
  onLoad(query) {
    // 页面加载
    this.getRealTimeWeather();
    this.getTomorrowWeather();
  },
  async realTimeWeatherAPI() {
    return request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data: {
        //...params,
        location: 101010100,
        key: 'df4d90e45d284e4eb4a78cde23b182e1',
      }
    });
  },
  async tomorrowWeatherAPI() {
    return request({
      url: 'https://devapi.qweather.com/v7/weather/3d?',
      data: {
        //...params,
        location: 101010100,
        key: 'df4d90e45d284e4eb4a78cde23b182e1',
      }
    });
  },
  async getRealTimeWeather() {
    const {
      longitude = '',
      latitude = '',
      district = '',
    } = await getLocation();
    const { data: { now: weatherInfo } } = await this.realTimeWeatherAPI({ location: `${longitude},${latitude}` });
    this.setData({
      weatherInfo
    })
  },
  async getTomorrowWeather() {
    const { data: { daily: futureWeatherInfo } } = await this.tomorrowWeatherAPI()
    this.setData({
      futureWeatherInfo
    })
  }
});
