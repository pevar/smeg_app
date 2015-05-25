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
                title: "Ambiente 1"
            },{
                title: "Ambiente 2"
            }]
        }));
    }
}
