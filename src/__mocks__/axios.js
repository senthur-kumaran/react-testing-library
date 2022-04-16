const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Senthur",
          last: "Kumaran"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "TheGOAT"
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}
