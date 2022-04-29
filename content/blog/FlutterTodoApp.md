---
title: Todo App written with Flutter
description: My first experince creating a mobile app.
slug: FlutterTodoApp
createdAt: '2021-06-30'
img: blog-1.jpg
---

# Todo App written with Flutter

## My first experince creating a mobile app.

To begin I have an iPhone so I would be creating an app that would run on IOS devices. 
From my research, I've seen a few options revolving around Swift (Apple's native solution), Flutter (Google's cross-platform solution), or React Native (Facebook's cross-platform solution).The idea of cross-platform is very appealing leaving both Flutter and React native as options.
Personally, I've used due to develop websites and have found react to be too different from what I'm used to with vue.
So, I will be building this app with flutter.

## Development 

While developing this app I learned my way around flutter's widgets and containers as well as the Dart programming language. This language is similar to javascript which I am already comfortable around so I didn't have too much trouble whipping things up. A big problem I had to overcome was persistence or storing data after the app has been closed. Flutter's documentation has 3 possible solutions. Store key-value data on disk, read and write files, and the option I chose Persist data with SQLite. This is mainly because the other two options were very rigid in the type of data they can store while SQLite can be used with many different data types. With SQLite, I was able to create CRUD functions for my todo model and successfully achieve persistence for my todo app.

The source code is available on my github [HERE](https://github.com/PeytonBrown/FlutterTodoApp)

![preview](https://github.com/PeytonBrown/Flutter-Todo-App/blob/main/Preview.jpg?raw=true)
