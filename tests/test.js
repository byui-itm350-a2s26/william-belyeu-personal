// 1. Load your code and the data file
const api = require('./api.js'); 
const eventsFile = require('./events.js'); 

// 2. Inject a test item into your events data so we know exactly what to look for
eventsFile['test-123'] = { title: 'Pass Fail Test' };

console.log('--- RUNNING PASS/FAIL TEST ---');

// 3. Create a fake request (req) looking for our test item
const mockReq = { 
  param: { eventId: 'test-123' } 
};

// 4. Create a fake response (res) to capture the output
let capturedData = null;
const mockRes = {
  json: function(data) {
    capturedData = data; 
  }
};

// 5. Run your function
api.event(mockReq, mockRes);

// 6. Print the result
if (capturedData && capturedData.title === 'Pass Fail Test') {
  console.log('Result: PASS');
} else {
  console.log('Result: FAIL');
}
