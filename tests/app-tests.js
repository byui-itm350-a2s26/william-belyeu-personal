// Import the modules we need to test to get code coverage on them
const eventsData = require('../backend/events.js');
const api = require('../backend/api.js');

describe('Personal Repository - 80%+ Code Coverage Tests', () => {

  // Test 1: Covers events.js data structure
  test('should verify events.js loads an array with default items', () => {
    expect(Array.isArray(eventsData)).toBe(true);
    expect(eventsData.length).toBeGreaterThan(0);
  });

  // Test 2: Covers api.js exports.events function
  test('should verify exports.events returns the correct data object', () => {
    const req = {};
    const res = {
      json: jest.fn() // Tracks if res.json() was executed
    };

    api.events(req, res);
    
    expect(res.json).toHaveBeenCalledWith(eventsData);
  });

  // Test 3: Covers api.js exports.event function (Individual event lookups)
  test('should verify exports.event returns a specific event item', () => {
    const req = {
      param: { eventId: 0 } // Simulates looking up index 0
    };
    const res = {
      json: jest.fn()
    };

    api.event(req, res);

    expect(res.json).toHaveBeenCalledWith(eventsData[0]);
  });
});