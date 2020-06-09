var tweetsSection = document.querySelector('.tweets');

const content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ineveniet, dignissimos ipsum veniam perspiciatis qui sequipraesentium perferendis veritatis atque similique dolorem,architecto eius velit alias consequatur esse. Nihil, eos.';

var tweetsQtd = [
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content },
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content},
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content},
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content},
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content},
	{ img: './assets/avatar.png', name: 'Felipe Augustos', 
		link: '@userAugustos', content: content}
];

	tweetsQtd.map(tweet => {
		tweetsSection.innerHTML += ` 
					<li>
            <img src="${tweet.img}" alt="" class="avatar" />
            <div class="info">
              <strong>${tweet.name} <span>${tweet.link}</span></strong>
              <p>
              	${tweet.content}
              </p>
              <div class="actions">
                <a href="#"><img src="./assets/comments.svg" alt="" />${Math.floor(Math.random() * Math.floor(25))}</a>
                <a href="#"><img src="./assets/retweet.svg" alt="" />${Math.floor(Math.random() * Math.floor(25))}</a>
                <a href="#"><img src="./assets/like.svg" alt="" />${Math.floor(Math.random() * Math.floor(25))}</a>
              </div>
            </div>
          </li>
          `
	});