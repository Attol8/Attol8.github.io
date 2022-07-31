---
layout: post
title: Photo2Painting
subtitle: Turn landscapes pictures into old masters' paintings
gh-repo: Attol8/photo2painting-render
gh-badge: [star, fork, follow]
tags: [flask, GANs, machine learning]
comments: true
---
The App is a PyTorch implementation of the notorious CycleGAN paper by Zhu et al. (2017) "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks". I have used and re-trained models that can be found on the official [GitHub page]("https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix") of the project to create an easy to use web application that transforms landscape pictures into paintings of these three old masters:

* Van Gogh
* Cezanne
* Monet

The web application was built with Flask and deployed on a DigitalOcean droplet. The project wants to demonstrate its users how Generative Adversarial Networks works in production and allowed me to dive deep into the theory of GANs.

👉👉 [LINK TO THE APP](https://photo2painting.tech/)