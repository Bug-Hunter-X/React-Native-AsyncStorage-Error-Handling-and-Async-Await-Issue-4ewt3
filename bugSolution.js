// Correct implementation using async/await and error handling
async function getItem() {
  try {
    const value = await AsyncStorage.getItem('@my_key');
    if (value !== null) {
      // Handle the retrieved data here.  Add a check to see if its a valid object
      const parsedValue = JSON.parse(value);
      if (typeof parsedValue === 'object' && parsedValue !== null) {
        console.log('Value:', parsedValue);
        return parsedValue; 
      } else {
        console.log('Invalid JSON retrieved from AsyncStorage.');
        return null;
      }
    } else {
      console.log('Value is null.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null; 
  }
}

// Usage example
getItem().then((data) => {
  // Do something with the retrieved data
  if (data) {
      console.log(data.name) //Access the data safely
  }
});