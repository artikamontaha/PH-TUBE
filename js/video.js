// funtion-1
const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => DisplayCatagoris(data.categories))
        .catch((error) => console.error(error))
}
const cardDemo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => DisplayVideo(data.videos))
        .catch((error) => console.error(error))
}
const DisplayVideo = (videos) => {
    const videoConteiner = document.getElementById("videos");
    videos.forEach((video) => {
        console.log(video)
        const card = document.createElement('div')
        card.classList = `card card-compact `
        card.innerHTML = `
        <figure class="h-[250px]">
    <img
      src= ${video.thumbnail}
      alt="Shoes" class="h-full w-full object-cover"/>
  </figure>
  <div class="px-0 py-2 flex gap-2">
  </div>`
  videoConteiner.append(card)
    })

}
loadCatagories()
loadVideos()
// {
//     category_id: '1001', 
//     category: 'Music'
// }

// funtion-2
const DisplayCatagoris = (categories) => {
    const categoryConteiner = document.getElementById('categoris')
    categories.forEach((item) => {
        console.log(item)
        const button = document.createElement('button');
        button.classList = "btn"
        button.innerText = item.category
        categoryConteiner.append(button)
    });
}

