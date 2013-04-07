function getResults() {
	var q1Val = $('input[name=q1]:checked').val();
	var q2Val = $('input[name=q2]:checked').val();
	var q3Val = $('input[name=q3]:checked').val();
	var q4Val = $('input[name=q4]:checked').val();
	var q5Val = $('input[name=q5]:checked').val();
	var q6Val = $('input[name=q6]:checked').val();
	var q7Val = $('input[name=q7]:checked').val();
	var qLangVal = $('input[name=qLanguage]:checked').val();
	var qClassVal = $('input[name=qClass]:checked').val();
	var scores = new Array();
	scores[0] = 0;
	scores[1] = 0;
	scores[2] = 0;
	scores[3] = 0;
	scores[4] = 0;
	scores[5] = 0;
	scores[6] = 0;
	scores[7] = 0;	
	var devices = 0;
	var intellegence = 1;
	var internetworks = 2;
	var media = 3;
	var modeling = 4;
	var people = 5;
	var systems = 6;
	var theory = 7;
	if (q1Val == 'q1-yes') {
		scores[devices] += 1;
		scores[systems] += 1;
	} else {
		scores[devices] -= 1;
		scores[systems] -= 1;
	}
	if (q2Val == 'q2-yes') {
		scores[media] += 1;
		scores[people] += 1;
	} else {
		scores[media] -= 1;
		scores[people] -= 1;
	}
	if (q3Val == 'q3-yes') {
		scores[theory] += 1;
		scores[modeling] += 1;
		scores[intellegence] += 1;
	} else {
		scores[theory] -= 1;
		scores[modeling] -= 1;
		scores[intellegence] -= 1;
	}
	if (q4Val == 'q4-yes') {
		scores[internetworks] += 1;
		scores[devices] += 1;
	} else {
		scores[internetworks] -= 1;
		scores[devices] -= 1;
	}
	if (q5Val == 'q5-yes') {
		scores[internetworks] += 1;
		scores[systems] += 1;
	} else {
		scores[internetworks] -= 1;
		scores[systems] -= 1;
	}
	if (q6Val == 'q6-theory') {
		scores[theory] += 1;
		scores[intellegence] += 1;
	} else {
		scores[devices] += 1;
		scores[systems] += 1;
		scores[media] += 1;
		scores[people] += 1;
	}
	if (q6Val == 'q7-yes') {
		scores[intellegence] += 1;
		scores[people] += 1;
	} else {
		scores[intellegence] -= 1;
		scores[people] -= 1;
	}

	if (qLangVal == 'qLanguage-Assembly') {
		scores[devices] += 1;
	} else if (qLangVal == 'qLanguage-C') {
		scores[devices] += 1;
		scores[internetworks] += 1;
		scores[systems] += 1;
	} else if (qLangVal == 'qLanguage-C++') {
		scores[devices] += 0.5;
		scores[internetworks] += 0.5;
		scores[media] += 0.5;
		scores[systems] += 0.5;
	} else if (qLangVal == 'qLanguage-C#') {
		scores[internetworks] += 0.5;
	} else if (qLangVal == 'qLanguage-CUDA') {
		scores[devices] += 1;
		scores[modeling] += 1;
	} else if (qLangVal == 'qLanguage-HTML') {
		scores[internetworks] += 1;
		scores[people] += 1;
	} else if (qLangVal == 'qLanguage-Java') {
		scores[internetworks] += 0.5;
	} else if (qLangVal == 'qLanguage-Javascript') {
		scores[internetworks] += 1;
		scores[people] += 1;
	} else if (qLangVal == 'qLanguage-Pseudocode') {
		scores[theory] += 1;
	} else if (qLangVal == 'qLanguage-Python') {
		scores[intellegence] += 1;
		scores[people] += 1;
	} else if (qLangVal == 'qLanguage-SQL') {
		scores[internetworks] += 1;
	} else if (qLangVal == 'qLanguage-Other') {

	}

	if (qClassVal == 'qClass-1301') {

	} else if (qClassVal == 'qClass-1315') {

	} else if (qClassVal == 'qClass-1331') {
		scores[people] += 1;
	} else if (qClassVal == 'qClass-1332') {
		scores[theory] += 1;
		scores[intellegence] += 1;
	} else if (qClassVal == 'qClass-2050') {
		scores[modeling] += 1;
		scores[theory] += 1;
	} else if (qClassVal == 'qClass-2110') {
		scores[devices] += 1;
		scores[media] += 1;
		scores[systems] += 1;
	} else if (qClassVal == 'qClass-2200') {
		scores[devices] += 1;
		scores[internetworks] += 1;
		scores[systems] += 1;
	} else if (qClassVal == 'qClass-2261') {
		scores[media] += 1;
		scores[people] += 1;
	} else if (qClassVal == 'qClass-2340') {

	}
	
	var maxScore = -1;
	var maxScoreVal = -999999;
	var secondMaxScore = -1;
	var secondMaxScoreVal = -999999;

	for (var i = 0; i < 8; i++) {
		if (scores[i] > maxScoreVal) {
			secondMaxScore = maxScore;
			secondMaxScoreVal = maxScoreVal;
			maxScore = i;
			maxScoreVal = scores[i];
		} else if ((maxScoreVal >= scores[i]) && (secondMaxScoreVal < scores[i])) {
			secondMaxScore = i;
			secondMaxScoreVal = scores[i];
		}
	}
	var maxScores = [maxScore, secondMaxScore];
	var resultsDiv = '<div id = "resultsDiv" name = "resultsDiv" > You may like:<ul>'
	for (var i = 0; i < 2; i++) {
		if (maxScores[i] == devices) {
			resultsDiv += '<li><a href="devices.html">Devices</a></li>';
		} else if (maxScores[i] == intellegence) {
			resultsDiv += '<li><a href="intelligence.html">Intelligence</a></li>';
		} else if (maxScores[i] == internetworks) {
			resultsDiv += '<li><a href="internetworks.html">Information Internetworks</a></li>';
		} else if (maxScores[i] == media) {
			resultsDiv += '<li><a href="media.html">Media</a></li>';
		} else if (maxScores[i] == modeling) {
			resultsDiv += '<li><a href="modeling.html">Modeling and Simulation</a></li>';
		} else if (maxScores[i] == people) {
			resultsDiv += '<li><a href="people.html">People</a></li>';
		} else if (maxScores[i] == systems) {
			resultsDiv += '<li><a href="systems.html">Systems</a></li>';
		} else if (maxScores[i] == theory) {
			resultsDiv += '<li><a href="theory.html">Theory</a></li>';
		}
	}
	resultsDiv += '</ul></div>';
	$('#resultsDiv').replaceWith(resultsDiv);
	$('#resultsDiv').trigger('create');
}
