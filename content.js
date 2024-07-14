
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

		console.log('Next');
		if (firstRecommendation) {
			firstRecommendation.click();
		}
	});
}
// 初期化
waitForVideoEnd();