/*
Tournament
Objective:
Your task is to create a JavaScript program that processes and displays the results of a football tournament. You will receive a raw input of game results, and your mandate is to develop a meaningful tally output in an organized way.

Guidelines:
Structure your input: The input to your program is a string that looks like:

Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win
Each line represents a game, with the first team listed being the one to which the result pertains. For instance, Allegoric Alaskans;Blithering Badgers;win indicates that the Allegoric Alaskans won against the Blithering Badgers. Remember to use these strings for output, as they are comparatively checked for function verification.

Your Output should be a Table Format: Construct a table where each row features a team and their respective statistics, displaying details in the following order:

Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
The abbreviations stand for:

MP: Matches Played
W: Matches Won
D: Matches Drawn (Tied)
L: Matches Lost
P: Points
A team earns three points for a win, one point for a draw, and no points for a loss.

Order of output: Organize your output by points, in descending order. If two or more teams have the same number of points, order them alphabetically. This is crucial for passing the test cases.

Challenge:
Think about how you would parse the input data efficiently and keep the tallies for each football team updated. Be mindful of the ordering of the teams when outputting the final tally.
Just the header if no input
A win is three points, a loss is zero points
A win can also be expressed as a loss
A different team can win
A draw is one point each
There can be more than one match
There can be more than one winner
There can be more than two teams
Typical input
Incomplete competition (not all pairs have played)
Ties broken alphabetically
*/
/**
 * Creates a leaderboard table given match log
 * @param {string} matchLog
 * @returns {string} leaderboard - formatted leaderboard viewable in terminal
 */
export const tournamentTally = (matchLog) => {
	// Do not change the spaces
	const header = "Team                           | MP |  W |  D |  L |  P";
	if(matchLog == ""){
		return header;
	}
	// Sample Team Object
	// const team = {
	// 	name: "Allegoric Alaskans",
	// 	games: 3,
	// 	wins: 1,
	// 	draws: 1,
	// 	losses: 1,
	// 	points: 3,
	// };


	// Write your code here
	let teams = new Map();
	const initTeam = (name)=>{
		if(!teams.has(name)){
			teams.set(name, {
				name,
				mp: 0,
				w:0,
				d:0,
				l:0,
				p:0
			})
		}
	}
	let resultStrArr = matchLog.split("\n");
	for(let rowData of resultStrArr){
		let [teamA, teamB, status] = rowData.split(";");
		//if team does not exist in teams map, then initialize and set
		initTeam(teamA);
		initTeam(teamB);

		//if exist, retrive it and update
		const A = teams.get(teamA);
		const B = teams.get(teamB);
		A.mp++;
		B.mp++;

		if(status == "win"){
			A.w++;
			A.p += 3;
			B.l++;
		}else if(status == "draw"){
			A.d++;
			B.d++;
			A.p += 1;
			B.p += 1;
		}else{ //loss
			A.l++;
			B.w++;
			B.p += 3;
		}
	}

		const teamsArr = Array.from(teams.values());
		const teamsArrInOrder = teamsArr.sort((a, b) =>{
			if(a.p != b.p) return b.p - a.p;
			return a.name.localeCompare(b.name); //sort string wise incase of equal point
		})

		// Sample Row for Leaderboard - follow the spaces exactly
		const leaderboardStrArr = teamsArrInOrder.map((team) =>
		`${team.name.padEnd(30, " ")} | ${team.mp
		  .toString()
		  .padStart(2, " ")} | ${team.w
		  .toString()
		  .padStart(2, " ")} | ${team.d
		  .toString()
		  .padStart(2, " ")} | ${team.l
		  .toString()
		  .padStart(2, " ")} | ${team.p
		  .toString()
		  .padStart(2, " ")}`
	  );

	return [header, ...leaderboardStrArr].join("\n");
	// return teamsArrInOrder;
};

// Sample Test Cases
// Test Case 1
console.log(
	tournamentTally(`Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`)
);
// Test Case 2
console.log("\n\n\n");
console.log(
	tournamentTally(
		`Courageous Californians;Devastating Donkeys;win
Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Allegoric Alaskans;loss
Courageous Californians;Blithering Badgers;win
Blithering Badgers;Devastating Donkeys;draw
Allegoric Alaskans;Courageous Californians;draw`
	)
);
