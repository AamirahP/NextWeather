import { fetchWeatherData } from "../src/api/page";

describe("fetchWeatherData", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ mockWeatherData: {} }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches weather data successfully", async () => {
    const data = await fetchWeatherData("London");
    expect(data).toEqual({ mockWeatherData: {} });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

//   it("throws an error when fetch fails", async () => {
//     global.fetch.mockImplementationOnce(() =>
//       Promise.resolve({
//         ok: false,
//         text: () => Promise.resolve("Error message", error),
//       })
//     );
//     await expect(fetchWeatherData("InvalidCity")).rejects.toThrow("Error message", error);
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//   });

  it("throws an error when fetch throws an error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("Network error"));
    await expect(fetchWeatherData("InvalidCity")).rejects.toThrow("Error fetching data");
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
