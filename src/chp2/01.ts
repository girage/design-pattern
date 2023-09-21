class WeatherData {
  constructor(
    public temperature: number,
    public humidity: number,
    public pressure: number
  ) {}

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }

  measurementsChanged(): void {}
}

class CurrentConditionsDisplay {
  update(temperature: number, humidity: number, pressure: number): void {}
}

class StatisticsDisplay {
  update(temperature: number, humidity: number, pressure: number): void {}
}

class ForecastDisplay {
  update(temperature: number, humidity: number, pressure: number): void {}
}


