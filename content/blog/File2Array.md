---
title: Converting files to an Array
description: Converts any file to an array of bytes. Useful for embedding resources directly into an application.
slug: File2Array
createdAt: '2022-01-17'
img: blog-1.jpg
---

# Converting files to an Array

## Purpose

This tool was designed to simply drag and drop any file and automatically create a C++ array of all the bytes of the file stored in a single header file. This is useful for using certain resources such as fonts, images or even shaders directly in your application without having to have an end user install these dependcies. 

## Usage

Simply drag and drop any file on to the File2Array.exe

![Example usage](https://i.imgur.com/lERmD1R.gif)

## Example output

```
#pragma once

int Hello_World_size = 11;

unsigned char Hello_World[] = {
	0x48, 0x65, 0x6C, 0x6C, 0x6F, 0x20, 0x57, 0x6F, 0x72, 0x6C, 0x64
};
```
The source code is available on my github [HERE](https://github.com/PeytonBrown/File2Array)