const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCKe55fEovzVU4kU5w9Yg4wA&part=snippet%2Cid&order=date&maxResults=9';

const videoList = null || document.getElementById('videoList');

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '98fabd80famsh8dcde58136b4376p1c1893jsnbe139e95d798',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchVideos (urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
//una funcion que se llama a sí misma
(async ()=>{
    try {
        const videos = await fetchVideos(API);
        let view = `${videos.items.map(video=>`
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                <a href="https://youtube.com/watch?v=${video.id.videoId}">
            </div>
            <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
            </div>
        </div>        
        `).slice(0,6).join('')}
        `;
        videoList.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();