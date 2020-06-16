---
title: "Solved in a Flash"
date: 2020-06-15T21:06:36-04:00
draft: false 
toc: false
images:
tags:
  - ctf
  - writeup
  - security
---
Use strings to look for strings in the flash.bin file. Use grep to look for strings with "ractf" in it.
```console
$ strings flash.bin | grep ractf
ractf{Fl4shDump5Ar3VeryFun!!}
```
