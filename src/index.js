// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.<form id="new-ramen">
//     <h4>Add New Ramen</h4>
//     <label for="name">Name: </label>
//     <input type="text" name="name" id="new-name" />
//     <label for="restaurant">Restaurant: </label>
//     <input type="text" name="restaurant" id="new-restaurant" />
//     <label for="image">Image: </label>
//     <input type="text" name="image" id="new-image" />
//     <label for="rating">Rating: </label>
//     <input type="number" name="rating" id="new-rating" />
//     <label for="new-comment">Comment: </label>
//     <textarea name="new-comment" id="new-comment"></textarea>
//     <input type="submit" value="Create" />
//   </form>

let allRamen
const Menu = document.getElementById(`ramen-menu`)

const detailImg = document.querySelector("img.detail-image")
const detailName = document.querySelector("h2.name")
const detailRest = document.querySelector("h3.restaurant")
const detailRating = document.getElementById("rating-display")
const detailComment = document.getElementById("comment-display")
const newName = document.getElementById("new-name")
const newRest = document.getElementById("new-restaurant")
const newImg = document.getElementById("new-image")
const newRating = document.getElementById("new-rating")
const newcomment = document.getElementById("new-comment")
const form = document.getElementById("new-ramen")


    fetch(`http://localhost:3000/ramens`)
    .then(res => res.json())
    .then((ramenData) => {
        allRamen = ramenData
        selectedRamen = allRamen[0]
        ramenImgFunc()
        ramenlist()
        newRamenFunc()
     })

    

const ramenImgFunc = () => {
    allRamen.forEach(ramen => {
         const ramenImg = document.createElement(`img`)
        ramenImg.src = ramen.image
        Menu.append(ramenImg)
        //console.log(ramen)
        ramenImg.addEventListener("click", () => {
            selectedRamen= ramen
          ramenlist()
          console.log("yeehaw")
        })
    });
}

const ramenlist = () => {
     selectedRamen
detailImg.src = selectedRamen.image
detailName.textContent = selectedRamen.name
detailRest.textContent = selectedRamen.restaurant
detailRating.textContent = selectedRamen.rating
detailComment.textContent = selectedRamen.comment

}
//make new div item and fill in details when clicked
const newRamenFunc = () => {
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        const newRamen = {
            name: newName.value,
            image: newImg.value,
            restaurant: newRest.value,
            rating: newRating.value,
            comment: newcomment.value,
            }
    
        console.log("hello")
        const ramenImg = document.createElement(`img`)
        ramenImg.src = newRamen.image
        Menu.append(ramenImg)
      
        ramenImg.addEventListener("click", () => {
                detailImg.src = newRamen.image
                detailName.textContent = newRamen.name
                detailRest.textContent = newRamen.restaurant
                detailRating.textContent = newRamen.rating
                detailComment.textContent = newRamen.comment
          console.log("yeehaw")
       });
       newName.value = ""
       newImg.value = ""
       newRest.value = ""
       newRating.value = ""
       newcomment.value = ""
       console.log(newRamen);
    });
};
