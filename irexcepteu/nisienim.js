// Example objects
var selCmpt = {
    events: ['click', 'hover'] // Assuming selCmpt has an array of events
};

var values = [1, 2, 3]; // Assuming values is a non-empty array

// Check the condition
if (selCmpt.events && values.length > 0) {
    console.log("Both conditions are true");
    // Execute some code here
} else {
    console.log("Condition not met");
    // Execute alternative code if the condition is not met
}
