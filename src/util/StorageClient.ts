import AsyncStorage from "@react-native-community/async-storage";

const addWorkout = async workout => {
  try {
    await AsyncStorage.setItem(`${workout.date}${workout.title}`, workout);
  } catch (e) {
    // saving error
  }
};

const getHistory = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
