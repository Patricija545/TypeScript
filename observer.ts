interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

interface Observer {
    update(temperature: number);
}

// CONCRETE SUBJECT
class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    public registerObserver(o: Observer) {
        this.observers.push(o);    
    }

    public removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    public notifyObservers() {
        for(let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

// CONCRETE OBSERVER
class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    public update(temperature: number) {
        console.log('TemperatureDisplay: I need to update my display.');
        // logic
    }

}

// CONCRETE OBSERVER
class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    public update(temperature: number) {
        if(temperature > 25) {
            console.log('Fan: it is hot here, turning myself on..');
            // logic
        }
        else {
            console.log('Fan: it is nice and cool, turning myself off..');
            // logic
        }
    }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
