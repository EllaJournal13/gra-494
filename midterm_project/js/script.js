document.querySelector('.five__video-thumbnail').onclick = () => {
    document.querySelector('.five__video-popup-container').style.display = 'block';
    document.querySelector('.five__video-popup-container video').src = vid.getAttribute('src');
}

document.querySelector('.five__video-popup-container span').onclick = () => {
	document.querySelector('.five__video-popup-container').style.display = 'none';
}