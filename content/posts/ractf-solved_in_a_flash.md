---
title: "Solved in a Flash"
date: 2020-06-14T22:52:22-04:00
draft: false 
toc: false
images:
tags:
  - ctf
---
# Solved in a Flash
Use strings to look for strings in the flash.bin file. Use grep to look for strings with "ractf" in it.
```console
$ strings flash.bin | grep ractf
ractf{Fl4shDump5Ar3VeryFun!!}
```
