//Interface segregation Principles

//the main idea is that clients does not pushed to depend on the interfaces they will never use.

/**Since JavaScript does not support interfaces, it is difficult to adopt this principle in JavaScript-based applications. However, we can use JavaScript compositions to implement this. Compositions allow developers to add functionalities to a class without inheriting the entire class. For example, assume that there is a class named DrivingTest with two functions named startCarTest and startTruckTest. If we extend the DrivingTest class for CarDrivingTest and TruckDrivingTest, we have to force both classes to implement the startCarTest and startTruckTest functions. */

Class DrivingTest {
    constructor(userType) {
      this.userType = userType;
    }
  }
  
  class CarDrivingTest extends DrivingTest {
    constructor(userType) {
      super(userType);
    }
  }
  
  class TruckDrivingTest extends DrivingTest {
    constructor(userType) {
      super(userType);
    }
  }
  
  const carUserTests = {
    startCarTest() {
      return ‘Car Test Started’;
    },
  };
  
  const truckUserTests = {
    startTruckTest() {
      return ‘Truck Test Started’;
    },
  };
  
  Object.assign(CarDrivingTest.prototype, carUserTests);
  Object.assign(TruckDrivingTest.prototype, truckUserTests);
  
  const carTest = new CarDrivingTest(carDriver );
  console.log(carTest.startCarTest());
  console.log(carTest.startTruckTest()); // Will throw an exception
  
  const truckTest = new TruckDrivingTest( ruckdriver );
  console.log(truckTest.startTruckTest());
  console.log(truckTest.startCarTest()); // Will throw an exception