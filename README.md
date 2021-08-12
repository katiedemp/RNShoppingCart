# React Native Shopping Cart

This is a basic shopping mobile app written in React-Native, Redux & TypeScript

![alt-text](https://github.com/katiedemp/RNShoppingCart/blob/e04d92d9f29ba9c4613c647d9c94721a401cb6f5/images/Android.gif)

## Features
A shopping list and checkout using
- React-Native
- Redux to store and persist state
- React-Navigation to move between the products list and checkout screen
- Written in TypeScript

## Installation

Install the dependencies and devDependencies and start the server.

```sh
git clone git@github.com:katiedemp/RNShoppingCart.git
yarn install
npx react-native start
```
For Android 
```sh
npx react-native run-android
```

For IOS 
```sh
cd ios && pod install && cd ..
npx react-native run-ios
```

## Extra Notes
- The cart will need to keep its state during app loads / refreshes
- List Products – these should always be listed to allow adding of products until checkout
- Products should be listed in this format: product name, price, button to add product
- Must be able to add a product to the cart
- Must be able to view number of current products in the cart
- Cart products should be listed in this format: product name, price, quantity, total, remove button
- Product totals should be tallied to give an overall total
- Must be able to remove a product from the cart
- Adding an existing product will only update existing cart product quantity (e.g. adding the same product
twice will NOT create two cart items)
- All prices should be displayed to 2 decimal places
- Use best practices
