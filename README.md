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
- The cart will keep its state during app loads / refreshes
- List Products – should always be listed to allow adding of products until checkout
- Products are listed in this format: product name, price, button to add product
- Able to add a product to the cart
- Able to view number of current products in the cart
- Cart products listed in this format: product name, price, quantity, total, remove button
- Product totals tallied to give an overall total
- Able to remove a product from the cart
- Adding an existing product only updates existing cart product quantity (e.g. adding the same product
twice does not create two cart items)
- All prices displayed to 2 decimal places
