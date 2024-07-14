
function scrollToBottom() {
	window.scrollTo(0, document.body.scrollHeight);
	setTimeout(function() {
		window.scrollTo(0, 0);
	}, 1000);

	
}
function waitForVideoEnd() {

	console.log('HOGE');
	scrollToBottom();
	

	const video = document.querySelector('video');

	
	if (!video) {
		setTimeout(waitForVideoEnd, 1000);
		return;
	}
	
	video.addEventListener('ended', () => {
		const firstRecommendation = document.querySelector('.p_48px_0_0 ul > li:first-child a');
		console.log('Next');
		if (firstRecommendation) {
			firstRecommendation.click();
		}
	});
}

waitForVideoEnd();