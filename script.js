// Songs array with song objects
const songs = [
    { title: 'swim', src: 's1.mp3', album: 'ab67616d000048515a0c2870f4f309e382d1fad6.jpg', artist: 'zayn malik1', date: '24-05-2014' },
    { title: 'under the influence', src: 's1.mp3', album: 'ab67616d000048519a494f7d8909a6cc4ceb74ac.jpg', artist: 'zayn malik2', date: '25-05-2014' },
    { title: 'starboy', src: 's1.mp3', album: 'ab67616d000048514718e2b124f79258be7bc452.jpg', artist: 'zayn malik3', date: '26-05-2014' },
    { title: 'Song 4', src: 's1.mp3', album: 'ab67616d00004851633a2d775747bccfbcb17a45.jpg', artist: 'zayn malik4', date: '27-05-2014' },
    { title: 'Song 5', src: 's1.mp3', album: 'ab67616d00004851881d8d8378cd01099babcd44.jpg', artist: 'zayn malik5', date: '28-05-2014' },
    { title: 'Song 6', src: 's1.mp3', album: 'ab67616d00001e022bdcb339402ebd78651f09c8.jpg', artist: 'zayn malik6', date: '21-05-2014' },
    { title: 'Song 7', src: 's1.mp3', album: 'ab67616d000048517fcead687e99583072cc217b.jpg', artist: 'zayn malik7', date: '24-05-2014' }
];
function playSong(index) {
    currentIndex = index;
    loadSong(songs[currentIndex]);
    audioElement.play();
    playPauseButton.innerHTML = '▐▐'; // Pause icon
}
// State variables
let currentIndex = 0;
const audioElement = document.getElementById('audio');
const songNameElement = document.getElementById('songname');
const progressBar = document.querySelector('.progress-bar');
const musicImage = document.getElementById('musicimage');
const songInfoElement = document.querySelector('.songinfo');
const playPauseButton = document.querySelector('.play-pause');
const forwardButton = document.querySelector('.forward');
const backwardButton = document.querySelector('.backward');
const volumeControl = document.getElementById('volume');

// Load the initial song
function loadSong(song) {
    audioElement.src = song.src;
    songNameElement.textContent = song.title;
    musicImage.src = song.album;
    songInfoElement.textContent = song.artist;
}

// Play or pause the current song
function playPause() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.innerHTML = '▐▐';
    } else {
        audioElement.pause();
        playPauseButton.innerHTML = '&#9658;'; 
    }
}

// Play the next song
function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(songs[currentIndex]);
    audioElement.play();
    playPauseButton.innerHTML = '▐▐'; // Pause icon
}

// Play the previous song
function previousSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentIndex]);
    audioElement.play();
    playPauseButton.innerHTML = '▐▐'; // Pause icon
}

// Seek through the song
function seek(event) {
    audioElement.currentTime = (event.target.value * audioElement.duration) / 100;
}

// Update current time and duration display
function updateTime() {
    const currentTimeElement = document.getElementById('currenttime');
    const durationElement = document.getElementById('duration');

    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration;

    currentTimeElement.textContent = formatTime(currentTime);
    progressBar.value = (currentTime / duration) * 100;
    durationElement.textContent = formatTime(duration);
}

// Format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Volume control
volumeControl.addEventListener('input', function () {
    audioElement.volume = volumeControl.value;
});

// Event listeners
playPauseButton.addEventListener('click', playPause);
forwardButton.addEventListener('click', nextSong);
backwardButton.addEventListener('click', previousSong);
audioElement.addEventListener('timeupdate', updateTime);
progressBar.addEventListener('input', seek);

loadSong(songs[currentIndex]);
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});
