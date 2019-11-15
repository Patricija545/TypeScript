# DESIGN PATTERNS IN TYPESCRIPT

## 1. DECORATOR
- basicaly like annotations in java
- useful when you want to allow objects to have different options
- for example, you are in charge for writing an ordering software for tesla cars,
a customer has to choose between either the model x or model y,
but these cars have many diferent options you can choose,
every option has a different affect on the price,
the options that tesla give you decorate your car
-> you basically take the base class (say the model x), instantiate it and
wrap many options around it - this is much better than giving your model x class
a list of properties and then calculating the price by checking if those properties are
marked as true or false

## 2. OBSERVER
- often when one part of the application changes, other parts need to be changed
- onClick or onChange handlers

## 3. FACADE
- used to hide a lot of complexity behind a single method
- example: home theater
- class facade will have an attribute for each of the devices we want to control
- allows you to keep your code short and to the point and prevents you from having to retype entire setup over and over again
- easy change of code

## 4. ADAPTER
- allows you to make different classes with different interfaces to work together without changing their source code
- real life example of adapter: you are traveling from united states to europe, if you want to charge your phone you would need an adapter to convert european volt outlet to US one 
- in this case, the adapter should "implement" the european plug and expose it as US plug for you to use it

- if I want to make the iPhone compatible with the microUSB than I have to make an adapter that implements microUSB, but internally can convert it to ligtning
- we don't need to change the iPhone class to be compatible with the microUSB, we only create a new class as an adapter class that handles all the translations
- in a real code base this could be much more complex, you might need to change the order of the arguments or might need to convert them to different types or you might need to use many classes to accomplish something like this

## 5. STATE
- used to keep track of the state of the process
- example: order on Amazon
- you create the inteface with all the methods that move your state along
- then you make a class for each state in which your order can be and you implement all of methods which are responsible for moving the state of your order along 