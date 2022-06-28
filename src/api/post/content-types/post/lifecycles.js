const axios = require('axios');

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/62baf9e6b89e0c05af572847');
    },

    async afterUpdate(result, params, data) {
      axios.post('https://api.netlify.com/build_hooks/62baf9e6b89e0c05af572847');
    },
  }
};
