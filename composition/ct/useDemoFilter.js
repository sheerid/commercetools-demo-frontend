import fetch from 'isomorphic-fetch';

let demoData = {};

  fetch(`/api/demodata`)
    .then(
        (response) => response.ok ? response.json() : Promise.reject(response))
    .then((res) => {
        demoData = res;
    })

const useDemoFilter = ({ orgname } = {}) => {
    // return a filter function that will be used to filter the products
    return (product) => {
//        console.log(product.masterVariant.sku);
        if (orgname === undefined || orgname === null) {
            orgname = "";
        }
        // loop through demoData and check if product.masterVariant.sku is in the list
        for (const [key, value] of Object.entries(demoData)) {
            if (key === product.masterVariant.sku) {
                console.log("found", key, "org:", value, "vs", orgname)
                if (value == orgname) {
                    return true;
                }
                return false;
            }
        }
        return true;
    }

  };
  
  export default useDemoFilter;
  