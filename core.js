/**
 * Created by pesik@ane4k.in on 28.10.15.
 */
var viewModel = {

    textValue: ko.observable(false),

    setText: function(data, event) {
        console.log(event.target.dataset.spoller);
        this.textValue(event.target.dataset.spoller);
    }
};

viewModel.textValue("");
ko.applyBindings(viewModel);