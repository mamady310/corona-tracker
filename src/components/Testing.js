fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "3f4f7b0954msheca74d0db130834p12adbdjsne010e1482182"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});