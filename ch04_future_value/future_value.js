"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment, rate, years) {
    for (var i = 0; i < years; i++) {
        investment = investment + (investment * rate / 100);
    }
    return investment.toFixed(2);
};

var processEntries = function() {
    var investment = ($("investment").value);
    var rate = ($("annual_rate").value);
    var years = ($("years").value);
    var isValid = true;

    // validate investment
    if (investment == "") {
        $("investment_error").firstChild.nodeValue = "This entry is required";
        isValid = false;
    } else if (investment <= 0 || investment > 100000) {
        $("investment_error").firstChild
            .nodeValue = "Investment must be a positive number no greater than $100,000";
        isValid = false;
    } else {
        investment = parseFloat(investment);
    }
    
    if (rate == "") {
        $("rate_error").firstChild.nodeValue = "This entry is required";
        isValid = false;
    } else if (rate <= 0 || rate > 15) {        
        $("rate_error").firstChild
            .nodeValue = "Interest rate must be a positive number no greater than 15";
        isValid = false;
    } else {
        rate = parseFloat(rate);
    }
    
    if (years == "") {
        $("years_error").firstChild.nodeValue = "This entry is required";
        isValid = false;
    } else if (years <= 0 || years > 50) {        
        $("years_error").firstChild
            .nodeValue = "The number of years must be a positive number no greater than 50";
        isValid = false;
    } else {
        years = parseFloat(years);
    }
    
    if (isValid) {
        $("future_value").value = calculateFV(investment, rate, years);
        $("investment_error").firstChild.nodeValue = "";
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};