/**
 * Created by cbartolini on 19/05/15.
 */
/**
 * Created by cbartolini on 19/05/15.
 */
module.exports = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('configurations', JSON.stringify({
            rooms: [{
                title: "Ambiente 1",
                image: "static/images/rooms/01/Immagine 01 Smeg.png"
            },{
                title: "Ambiente 2",
                image: "static/images/rooms/02/Immagine 02 Smeg.jpg"
            }]
        }));
    }
}
