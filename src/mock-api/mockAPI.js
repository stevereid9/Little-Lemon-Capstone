import { v4 as uuidv4 } from "uuid";

// This mock API implementation generates mock data for testing and development purposes.
// It includes functions to fetch available times and submit form data.

const generateMockTimeData = (date) => {
  const availableTimes = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const dayOfMonth = date.getDate();

  const mockData = availableTimes.map((time, index) => {
    const randomNumber = ((dayOfMonth + index) % 9) / 10;

    const available = randomNumber < 0.5;

    return {
      id: uuidv4(),
      value: time,
      available: available,
    };
  });

  return mockData;
};

export const fetchAPI = (date) => {
  const mockData = generateMockTimeData(date);
  return mockData;
};

export const submitAPI = (formData) => true;
