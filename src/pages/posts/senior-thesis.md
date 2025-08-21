---
layout: '../../layouts/Layout.astro'
title: 'Senior Thesis'
pubDate: 'Sat, 1 Jun 2024 08:00:00 EST'
---
# Senior thesis: Using Frame Randomization to Mitigate Errors in Quantum Optimization

As a senior in the Glynn Family Honors Program at Notre Dame, I was required to write a senior thesis. I worked with Dr. Anthony Hoffman at Notre Dame, Dr. Steve Adachi at Lockheed Martin, and Dr. Joshua Job at Lockheed Martin. 

My abstract is below. Feel free to reach out if you're interested in seeing the full paper!

Update: I edited my thesis to turn it into more of a typical research paper format and uploaded it to arXiv [here!](https://arxiv.org/abs/2508.14142)

## Abstract

Error mitigation is essential for near-term quantum devices, and one promising technique is frame randomization. This method inserts random twirling gates into a circuit to reduce errors while preserving unitarity and depth. We apply frame randomization to the quantum approximate optimization algorithm (QAOA) with p=1 on a superconducting quantum circuit system, demonstrating its potential to improve energy calculations. Specifically, we investigate the use of QAOA to calculate the lowest energy state of a frustrated Ising ring system and compare the results of randomized circuits generated using two different randomized techniques. Our results show that both methods can mitigate errors, with expected extremal energy values of 5.25&pm;0.145 and 4.08&pm;0.36, for Randomized Compilation and Pauli frame randomization respectively, compared to 2.63&pm;0.068 without randomization and 5.676&pm;0.006 with a noiseless simulator. 
		