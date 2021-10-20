---
title: "Systems Engineering for University-level Engineering Projects and Competitions"
date: 2021-10-19
draft: true 
toc: true
tags:
  - notes
  - engineering
  - systems engineering
---

Notes based on https://youtube.com/playlist?list=PLStC43yAV6zRhiTcHM4x5pF1e-ODXs2Ht

## Systems Engineering and the Project Life Cycle

### Types of Engineering

#### Traditional
Solve problems in their traditional domain  
Get to a "point solution" quickly and efficiently
* Mechanical
* Aerospace
* Computer/Electrical
* Nuclear
* Software

#### Engineering Specialists
Support and drive traditional engineers   
Manage uncertainty and arrive at solution
* Reliability
* Availability
* Maintainability
* Sustainability
* Survivability
* Serviceablity
* Manufacturability
* Transportability
* Safety 
* Logistics


#### System Engineering
* Big Picture
* Transdisciplinary problem solving
* Avoid "point solutions"
  * Break complex problems into single domain problems and hand off to traditional discipline engineers

### Systems Engineering Concepts
* Wholistic - Looking at the Big Picture
* Fractal and Holographic
  * Same process at any level
  * Iterative and repetitive
* Subproblems - Problems can be broken down into simpler subproblems
  * Top Down
  * Bottom Up
  * Verification

### The Project Life Cycle (PLC)
* Decomposition & Definition 
  * Break complex problems into simpler problems and define solutions
* Integration and Verification
  * Combine subproblems and verify that they meet requirements
* **PDR (Preliminary Design Review)**
  * A baseline
  * When you can formally accept single discipline problem descriptions and hand it off to traditional engineers
![PLC Overview](/systemengineering/PLC.png)
* **Control Gates**
  * Examples: Preliminary Design Review (PDR), System Requirements Reviews (SRR), Critical Design Review (CDR)
  * SRR makes sure the system requirements have been identified correctly and completely
  * CDR makes sure an implementation has met the requirements
  * PDR makes sure a planned design meets requirements
  * Provides validation, assurance of consistency, completeness, coherency
    * Do we have the right problem?

    ![Control Gates in PLC](/systemengineering/controlgates.png)

## The Central Elements of Project Management

### Project Management Triad
Constraints
* Schedule
* Cost/Budget
* Technical Performance

### Baseline
* **Baseline**: Formal description of problem space, solution space, and the parts of the system that are built
* A new, more detailed Baseline is established at each Control Gate or Review
* Goal is to make sure everyone is working on the same problem, same solution, and same level of detail between control gates and reviews

### Managing Triads
* Set target milestones at the start, SRR, PDR, CDR, etc., and at the end) of the project
* Triad elements are interrelated, being behind on one can impact the other elements

### Milestones
* Start
* End
* Customer Required Dates
* Review or Control Gates
* At Decision points
* Each baseline might produce new milestones

### Schedule
* Time ordering of milestones and what gets done by each milestone
* Gantt Chart

### Budget
* Estimate total project cost
* Each new baseline gives more detailed allocation
* Schedule determines spend rate
* Review cost targets at least every milestone
* Cost estimate and budget becomes part of the baseline

### Technical Performance
* Technical performance level determined by competition
  * E.g. Lunabotics requires minimum of 1.0 kg of gravel mined to compete in Mining Category
  * E.g. Total Mass, Volume, bandwidth, etc.
* Technical requirements set TPM (Technical Performance Measurement) targets
  * Pick important targets to monitor


### Allocation
* All targets must be allocated through system hierarchy
* Reallocation in any of the triads requires reconsideration of allocations for other two
* Document decisions

## How to Use Requirements
