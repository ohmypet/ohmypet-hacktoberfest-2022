<template>
  <div class="header">
    <a href="home" class="logo">TVC12</a>
    <div class="header-right">
      <a :class="[getActive('home')]" @click="onClickHeader('home')">Home</a>
      <a :class="[getActive('contact')]" @click="onClickHeader('contact')">Contact</a>
      <a :class="[getActive('about')]" @click="onClickHeader('about')">About</a>
    </div>
  </div>
</template>

<script src = './index.js'/>

<style src = './index.css'/>
