/* 
The following functions will behave as it they were external APIs
*/

// Utility function to add a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const seededRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

// Adding a 1-second delay to fetchAPI
export const fetchAPI = async (date) => {
    await delay(1000);  // 1-second delay
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

// Adding a 1-second delay to submitAPI
export const submitAPI = async (formData) => {
    await delay(1000);  // 1-second delay
    return true;
};
