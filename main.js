const app = Vue.createApp({ // creates a Vue instance 
    // pass in an object as a parameter (options object to add properties to configure app, 
    // must be at least an empty object)
    data() { // data property/option corresponding to a function -- ES6 shorthand 
        return { // returns another object with product property as a data item  
            product: 'Socks', 
            description: 'I love socks'
        }
    }
})
