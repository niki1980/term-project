let serviceRequest = new XMLHttpRequest();
let serviceURL = 'https://niki1980.github.io/term-project/data/servicepricing.json';
serviceRequest.open('GET', serviceURL, true);
serviceRequest.send();

serviceRequest.onload = function () {
        let pricingData = JSON.parse(serviceRequest.responseText);
        console.log(pricingData);
        document.getElementById('service1').innerHTML = pricingData.pricing[0].service;
        document.getElementById('cost1').innerHTML = pricingData.pricing[0].cost;

        document.getElementById('service2').innerHTML = pricingData.pricing[1].service;
        document.getElementById('cost2').innerHTML = pricingData.pricing[1].cost;

        document.getElementById('service3').innerHTML = pricingData.pricing[2].service;
        document.getElementById('cost3').innerHTML = pricingData.pricing[2].cost;

        document.getElementById('service4').innerHTML = pricingData.pricing[3].service;
        document.getElementById('cost4').innerHTML = pricingData.pricing[3].cost;

        document.getElementById('service5').innerHTML = pricingData.pricing[4].service;
        document.getElementById('cost5').innerHTML = pricingData.pricing[4].cost;

        document.getElementById('service6').innerHTML = pricingData.pricing[5].service;
        document.getElementById('cost6').innerHTML = pricingData.pricing[5].cost;

        document.getElementById('service7').innerHTML = pricingData.pricing[6].service;
        document.getElementById('cost7').innerHTML = pricingData.pricing[6].cost;

        document.getElementById('service8').innerHTML = pricingData.pricing[7].service;
        document.getElementById('cost8').innerHTML = pricingData.pricing[7].cost;
}