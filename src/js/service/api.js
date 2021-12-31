const getDataFromAPI = async (value) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${value}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getDataFromAPI;
