// Time: O(n^2), Space: O(n)
function tournamentWinner(competitions, results) {
	const score = {};
	
	// register all programming languages
	for (const competition of competitions) {
		for (const team of competition) {
			if (!score[team]) score[team] = 0;
		}
	}
	
	// assign points to the winner teams
	for (let i = 0; i < results.length; i++) {
		const winner = results[i] === 0 ? 1 : 0;
		const team = competitions[i][winner];
		score[team] = score[team] + 3;
	}
	
	let points = -1;
	let tournamentWinner = '';
	
	// count the points and assign the winner
	for (const team in score) {
		if (score[team] > points) {
			tournamentWinner = team;
			points = score[team]
		}
	}
	
  return tournamentWinner;
}
