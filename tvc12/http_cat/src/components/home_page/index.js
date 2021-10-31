import StatusItem from './StatusItem.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      listStatus: [
        {
          url: 'https://http.cat/100.jpg',
          name: 'Countinue',
          status: 100,
        },
        {
          url: 'https://http.cat/101.jpg',
          name: 'Switching Protocols',
          status: 101,
        },
        {
          url: 'https://http.cat/200.jpg',
          name: 'Ok',
          status: 200,
        },
        {
          url: 'https://http.cat/201.jpg',
          name: 'Created',
          status: 201,
        },
        {
          url: 'https://http.cat/202.jpg',
          name: 'Accepted',
          status: 202,
        },
        {
          url: 'https://http.cat/204.jpg',
          name: 'No Content',
          status: 204,
        },
        {
          url: 'https://http.cat/206.jpg',
          name: 'Partial Content',
          status: 206,
        },
        {
          url: 'https://http.cat/207.jpg',
          status: 207,
          name: 'Multi-Status',
        },
        {
          url: 'https://http.cat/300.jpg',
          status: 300,
          name: 'Multiple Choices',
        },
        {
          url: 'https://http.cat/301.jpg',
          status: 301,
          name: 'Moved Permanetly',
        },
        {
          url: 'https://http.cat/302.jpg',
          status: 302,
          name: 'Found',
        },
      ],
    };
  },
  components: {
    StatusItem,
  },
};
