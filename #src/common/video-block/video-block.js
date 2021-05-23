function cardVideoHandler() {
	function togglePlayPause(video,btn) {
		if(video.paused) {
			video.play();
			btn.firstElementChild.className = 'icon-pause';
			video.setAttribute('controls', true);

		} else {
			video.pause();
			btn.firstElementChild.className = 'icon-play2';
			btn.style.opacity = '1';
		}
	}

	let videoBlock = document.querySelectorAll('.video-block');
	if(videoBlock.length) {
		videoBlock.forEach((item) => {
			let video = item.querySelector('.video-block__video');
			let btn = item.querySelector('.video-block__play-pause');

			if(video) {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					togglePlayPause(video,btn);
				});
				video.addEventListener('ended', () => {
					video.pause();
					btn.firstElementChild.className = 'icon-play2';
					btn.style.opacity = '1';
					video.removeAttribute('controls');
				});
				video.addEventListener('play', () => {
					btn.firstElementChild.className = 'icon-pause';
				});
				video.addEventListener('pause', () => {
					btn.firstElementChild.className = 'icon-play2';
				});
				video.addEventListener('mouseenter', (e) => { 
					if(!video.paused) {
						btn.style.opacity = '1';
					} 
				});
				video.addEventListener('mouseleave', (e) => { 
					if(!video.paused) {
						btn.style.opacity = '0';
					} 
				});

			}
		})
	}

}

cardVideoHandler();