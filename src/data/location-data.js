const data = [
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    location: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Dubai",
    latitude: 25.276987,
    longitude: 55.296249,
  },
  {
    location: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    location: "Barcelona",
    latitude: 41.3851,
    longitude: 2.1734,
  },
  {
    location: "Venice",
    latitude: 45.4408,
    longitude: 12.3155,
  },
  {
    location: "Amsterdam",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "San Francisco",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    location: "Dublin",
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    location: "Kuala Lumpur",
    latitude: 3.139,
    longitude: 101.6869,
  },
  {
    location: "Lisbon",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  {
    location: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: "Athens",
    latitude: 37.9838,
    longitude: 23.7275,
  },
  {
    location: "Vienna",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    location: "Cape Town",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: "Osaka",
    latitude: 34.6937,
    longitude: 135.5022,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Chittagong",
    latitude: 22.3569,
    longitude: 91.7832,
  },
  {
    location: "Khulna",
    latitude: 22.8158,
    longitude: 89.55,
  },
  {
    location: "Rajshahi",
    latitude: 24.3636,
    longitude: 88.6241,
  },
  {
    location: "Sylhet",
    latitude: 24.8949,
    longitude: 91.8687,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    location: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    location: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    location: "Chennai",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    location: "Karachi",
    latitude: 24.8607,
    longitude: 67.0011,
  },
  {
    location: "Lahore",
    latitude: 31.5497,
    longitude: 74.3436,
  },
  {
    location: "Islamabad",
    latitude: 33.6844,
    longitude: 73.0479,
  },
  {
    location: "Faisalabad",
    latitude: 31.4504,
    longitude: 73.135,
  },
  {
    location: "Rawalpindi",
    latitude: 33.5651,
    longitude: 73.0169,
  },
  {
    location: "Colombo",
    latitude: 6.9271,
    longitude: 79.8612,
  },
  {
    location: "Kandy",
    latitude: 7.2906,
    longitude: 80.6337,
  },
  {
    location: "Galle",
    latitude: 6.0535,
    longitude: 80.2209,
  },
  {
    location: "Jaffna",
    latitude: 9.6615,
    longitude: 80.0255,
  },
  {
    location: "Negombo",
    latitude: 7.209,
    longitude: 79.8366,
  },
  {
    location: "Kabul",
    latitude: 34.5553,
    longitude: 69.2075,
  },
  {
    location: "Herat",
    latitude: 34.3416,
    longitude: 62.203,
  },
  {
    location: "Kandahar",
    latitude: 31.6355,
    longitude: 65.738,
  },
  {
    location: "Mazar-i-Sharif",
    latitude: 36.7069,
    longitude: 67.1128,
  },
  {
    location: "Jalalabad",
    latitude: 34.425,
    longitude: 70.4579,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
