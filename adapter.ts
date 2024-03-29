interface IPhone {
    useLightning();
}

interface Android {
    useMicroUSB();
}

class iPhone7 {
    useLightning() {
        console.log('Using lightning port..');
    }
}

class GooglePixel {
    useMicroUSB() {
        console.log('Using micro USB..');
    }
}

// ADAPTER CLASS
class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }
    
    public useMicroUSB() {
        console.log('Want to use micro USB, converting to Lightning..');
        this.iphoneDevice.useLightning();
    }

}

let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();

