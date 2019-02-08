var vm = {
    name: ko.observable(),
    array: ko.observableArray(),
    addName: function () {
        this.array.push(this.name());
    }
};

vm.array.push('bill');
vm.array.push('paul');
vm.array.push('mark');
vm.name("");
ko.applyBindings(vm);
