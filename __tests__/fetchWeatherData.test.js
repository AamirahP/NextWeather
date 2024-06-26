import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchWeatherData } from "../src/api/page";
import App from "../src/app/main/page";

jest.mock("../src/api/page", () => ({
  fetchWeatherData: jest.fn(),
}));

describe("App", () => {
    beforeEach(() => {
      fetchWeatherData.mockResolvedValue({
        main: { temp: 20, humidity: 50 },
        name: "London",
        wind: { speed: 5 },
        weather: [{ icon: "01d", description: "Clear sky" }],
      });
    });
  
    it("renders weather data when fetched successfully", async () => {
      await act(async () => {
        render(<App />);
      });
      expect(await screen.findByText(/London/i)).toBeInTheDocument();
      expect(screen.getByText(/20°C/i)).toBeInTheDocument();
      expect(screen.getByText(/Clear sky/i)).toBeInTheDocument();
    });
  
    it("renders error message when fetch fails", async () => {
      fetchWeatherData.mockRejectedValueOnce(new Error("Failed to fetch"));
      await act(async () => {
        render(<App />);
      });
      expect(await screen.findByText(/Please enter a valid location/i)).toBeInTheDocument();
    });
  
    it("calls search function when search button is clicked", async () => {
      await act(async () => {
        render(<App />);
      });
      const searchButton = screen.getByRole("button", { name: /search/i });
      userEvent.click(searchButton);
      expect(fetchWeatherData).toHaveBeenCalledWith("London");
    });
  });
