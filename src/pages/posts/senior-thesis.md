---
layout: '../../layouts/Layout.astro'
title: 'Senior Thesis'
---
# Senior thesis: Using Frame Randomization to Mitigate Errors in Quantum Optimization

As a senior in the Glynn Family Honors Program at Notre Dame, I was required to write a senior thesis. I worked with Dr. Anthony Hoffman at Notre Dame, Dr. Steve Adachi at Lockheed Martin, and Dr. Joshua Job at Lockheed Martin. My abstract is below. Feel free to reach out if you're interested in seeing the full paper!

## Abstract

Achieving the goal of practical, fault-tolerant quantum computers requires effective reduction, mitigation, and correction of errors in quantum computations. For large, complex programs, quantum error correction schemes may be the most effective, but because they require large numbers of connected qubits, they are impractical for noisy intermediate-scale quantum (NISQ) devices. Instead, for these devices we can apply error mitigation techniques to reduce the impact of noise in our quantum computations. One technique for mitigating two-qubit errors is randomized compilation. This technique inserts random twirling gates into the desired circuit in such a way that the overall circuit unitarity and circuit depth are both preserved. We show that randomized compilation can significantly reduce errors on superconducting quantum circuit systems and produce a more accurate energy calculation when applied to the quantum approximate optimization algorithm (QAOA). Specifically, we use QAOA to calculate the lowest energy state of a frustrated Ising ring system and compare the results of randomized circuits generated using two different randomized techniques. The minimum expected energy value calculated with a noiseless simulator was -6.9236, while the minimum energy value calculated with a QPU was -2.6366. Randomized compilation using Clifford gates with 20 randomizations generated an expected minimum energy value of -5.1854 and generating randomized circuits from the set of Pauli gates using 20 randomizations generated an expected minimum energy value of -4.0227. Both randomized methods show potential in mitigating errors in this application of QAOA.
		