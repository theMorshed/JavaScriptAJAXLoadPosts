// get all element by their id
const loadButton = document.getElementById('btn-load');
const conatainerBox = document.getElementById('container');
const list = document.createElement('ul');

// add event listener to load button
loadButton.addEventListener('click', function(){
    // create a new httprequest object
    const request = new XMLHttpRequest();
    // open a request
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    // send a request
    request.send();
    // handle request
    request.onreadystatechange = function handleRequest() {
        // check ready state and status for error handling
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            data.forEach(singleData => {
                const li = document.createElement('li');
                li.textContent = singleData.title;
                list.appendChild(li);
                li.setAttribute('class', 'text-teal-700');
            });
            conatainerBox.insertAdjacentElement('beforeend', list);
        }
    }
});
