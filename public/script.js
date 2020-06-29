const database = {
	arms:["pull down front", "bent over row 1H", "shoulder press", "shoulder fly",
	"tricep extensions", "bicep curls", "forearm curls"],
	legs:["squat", "leg press", "lunge", 
	"leg extension", "leg curl", "calf raise",
	"hip adductor"],
	chest:["bench press", "chest fly", "bent over row tight"],
	abs:["crunch", "russian twist", "leg raise"],
	upperBack:["pull down rear", "lateral raise", "upright row"],
	lowerBack:["deadlift", "back extensions", "back pulse"],
}


// script for selecting workouts and adding.


function generateWorkout(db){
	const bodyparts = ["arms", "legs", "chest", "abs", "upperBack", "lowerBack"];

	

	for (let bodypart of bodyparts){
		const currentBP1 = document.querySelector(`.${bodypart}W1`);
		const currentBP2 = document.querySelector(`.${bodypart}W2`);

		function getRandom(except){
			const num = Math.floor(Math.random() * db[bodypart].length);
			if (num !== except || except === undefined) return num;
			else return getRandom(except);
		}
		
		const firstW = getRandom();
		const secondW = getRandom(firstW);

		currentBP1.innerHTML = db[bodypart][firstW];
		currentBP2.innerHTML = db[bodypart][secondW];
	}
}

generateWorkout(database);