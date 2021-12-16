const imgContainer = document.createElement(".images");

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        
        img.addEventListener("load", function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener("error", function() {
            reject(new Error("Image not found"));
        });
    });
};

createImage('img/img-1.png')
    .then(img => {
        currentImg = img;
        console.log(`Image 1 loaded`);
        return wait(2);
    })
    .then(()=> {
        currentImg.style.display = "none";
        return createImage('img/img-2.png');
    })
    .then(img => {
        currentImg = img;
        console.log("Image 2 loaded");
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
    })
    .catch(err => console.error(err));