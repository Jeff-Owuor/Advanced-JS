const getAddress = () => {
    getContinents.then(continent => {
      return getCountries(continent);
    }, error => {
      console.log(new Error(error));
    }).then(country => {
      return getStates(country);
    }, error => {
      console.log(new Error(error));
    }).then(state => {
      return getCities(state);
    }, error => {
      console.log(new Error(error));
    }).then(() => {
      return done();
    }, error => {
      console.log(new Error(error));
    });
   }
   
   const getContinents = new Promise((resolve, reject) => {
    setTimeout(() => {
      // code to get all continents
      let continent = "Asia";
      console.log(continent);
      resolve(continent);
    }, 1000);
   });
   
   const getCountries = (continent) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // code to get all countries
        let country = "India";
        console.log(country);
        resolve(country);
      }, 1000);
    });
   }
   
   const getStates = (country) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // code to get all states
        let state = "Rajasthan";
        console.log(state);
        resolve(state);
      }, 1000);
    });
   }
   
   const getCities = (state) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // code to get all cities
        let city = "Jaipur";
        console.log(city);
        resolve();
      }, 1000);
    });
   }
   
   const done = () => {
    console.log("DONE!");
   };
   
   getAddress();