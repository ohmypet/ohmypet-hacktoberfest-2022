<template>
  <ul>
    <StatusItem v-for="item in listStatus" :key="item.status" :item="item"/>
  </ul>
</template>

<script src = './index.js'/>
