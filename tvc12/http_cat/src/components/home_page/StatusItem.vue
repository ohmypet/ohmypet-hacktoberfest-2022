<template>
  <a>
    <img :src="item.url" />
    <div>
      <div>{{item.status}}</div>
      <p>{{item.name}}</p>
    </div>
  </a>
</template>

<script src = "./status_item.js"/>
