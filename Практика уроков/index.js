 const post = {
	title: 'myTitle',
	likeQty: 3
 }

 console.log (JSON.stringify(post));

 const jsonStringified = JSON.stringify(post);

 console.log (JSON.parse(jsonStringified));