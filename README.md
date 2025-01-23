# Build_a_Vehicle

## Description

This application is used to build or select and exsiting vehicle. Once selected the user can perform certain actions until they exit the application.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd Build_a_Vehicle
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Build the project:
    ```sh
    npm run build
    ```
2. Start the application:
    ```sh
    npm start
    ```

## Features

- Create a new vehicle (Car, Truck, Motorbike)
- Select an existing vehicle
- Perform actions on the selected vehicle:
  - Print details
  - Start vehicle
  - Accelerate
  - Decelerate
  - Stop vehicle
  - Turn right
  - Turn left
  - Reverse
  - Tow a vehicle (Truck only)
  - Perform a wheelie (Motorbike only)

## Classes

- [Car](http://_vscodecontentref_/1): Represents a car with properties like VIN, color, make, model, year, weight, top speed, and wheels.
- [Truck](http://_vscodecontentref_/2): Represents a truck with additional properties like towing capacity.
- [Motorbike](http://_vscodecontentref_/3): Represents a motorbike with properties like VIN, color, make, model, year, weight, top speed, and wheels.
- [Wheel](http://_vscodecontentref_/4): Represents a wheel with properties like diameter and tire brand.
- [Cli](http://_vscodecontentref_/5): Handles the command-line interface for creating and managing vehicles.

## Interfaces

- [AbleToTow](http://_vscodecontentref_/6): Interface for vehicles that can tow other vehicles.
- [Driveable](http://_vscodecontentref_/7): Interface for vehicles that can be driven.

## Video Demo

[![Watch the video](https://drive.google.com/file/d/1wUbRMtu_O4SfuqWJMEuEkbjztCd6ycDJ/view?usp=sharing)]

## License

This project is licensed under the MIT License.