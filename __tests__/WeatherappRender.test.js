/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from '../src/App';
import fetchMock from 'jest-fetch-mock';

describe('WeatherApp component rendering', () => {
  it('renders WeatherApp components with data', () => {
    fetchMock.mockResponse(
      JSON.stringify({
        "weather": [{"id": 502, "main": "Rain", "description": "heavy intensity rain", "icon": "10d"}],
        "base": "stations",
        "main": {"temp": 8.09, "pressure": 997, "humidity": 88},
        "wind": {"speed": 3.6, "deg": 100},
        "name": "London",
      })
    );
    const { container } = render(<App />);

    const weatherImage = container.getElementsByClassName('.weather-image');
    const weatherTemp = container.getElementsByClassName('.weather-temp');
    const weatherLocation = container.getElementsByClassName('.weather-location');
    const humidityIcon = container.getElementsByClassName('.icon[src*="humidity"]');
    const windIcon = container.getElementsByClassName('.icon[src*="wind"]');
    const description = container.getElementsByClassName('.description');

    expect(weatherImage).not.toBeNull();
    expect(weatherTemp).not.toBeNull();
    expect(weatherLocation).not.toBeNull();
    expect(humidityIcon).not.toBeNull();
    expect(windIcon).not.toBeNull();
    expect(description).not.toBeNull();
  });
});
