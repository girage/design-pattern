interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter(obv => o !== obv);
  }

  notifyObservers(): void {
    for (const obv of this.observers) {
      obv.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;

  constructor(private weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      "Current conditions: " +
        this.temperature +
        "F degrees and " +
        this.humidity +
        "% humidity"
    );
  }
}

// hu pre
class StatisticsDisplay implements Observer, DisplayElement {
  private pressure: number = 0;
  private humidity: number = 0;

  constructor(private weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      "Statistics conditions: " +
        this.pressure +
        "psi and " +
        this.humidity +
        "% humidity"
    );
  }
}

// temp pre
class ForecastDisplay implements Observer, DisplayElement {
  private pressure: number = 0;
  private temperature: number = 0;

  constructor(private weatherData: WeatherData) {
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      "Forecast conditions: " +
        this.temperature +
        "F degrees and " +
        this.pressure +
        "psi"
    );
  }
}

function main() {
  let weatherData = new WeatherData();
  let currentDisplay = new CurrentConditionsDisplay(weatherData);
  let staticsDisplay = new StatisticsDisplay(weatherData);
  let forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);

  console.log("===================");

  weatherData.removeObserver(currentDisplay);
  weatherData.setMeasurements(80, 65, 30.4);
}

main();
