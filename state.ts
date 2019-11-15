interface State {
    order: Order;

    cancelOrder();
    verifyPayments();
    shipOrder();
}

class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;

    public currentState: State;

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new orderBeingPreparedState(this);
    
        this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }
}

class CancelledOrderState implements State {

    public order: Order;

    constructor (order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('Your order has already been cancelled.');
    }

    public verifyPayments() {
        console.log('Order cancelled, you cannot verify payment.');
    }

    public shipOrder() {
        console.log('Order cannot ship, it was cancelled.');
    }
}

class PaymentPendingState implements State {

    public order: Order;

    constructor (order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('Cancelling your upaid order..');
        this.order.setState(this.order.cancelledOrderState);   
    }

    public verifyPayments() {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);   
    }

    public shipOrder() {
        console.log('Cannot ship the order when payment is pending!');
    }
}

class OrderShippedState implements State {

    public order: Order;

    constructor (order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('You cannot cancel, already shipped..');
    }

    public verifyPayments() {
        console.log('You cannot verify payment, already shipped..');
    }

    public shipOrder() {
        console.log('You cannot ship it again, already shipped..');
    }
}

class orderBeingPreparedState implements State {

    public order: Order;

    constructor (order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('Cancelling your order..');
        this.order.setState(this.order.cancelledOrderState);
    }

    public verifyPayments() {
       console.log('Already verified your payment.');
    }

    public shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    }
}

let order = new Order();
order.getState().shipOrder();
console.log('Order state: ' + (<any> order.getState()).constructor.name);