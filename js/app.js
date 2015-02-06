
var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nicknames = ko.observableArray([
        {name: 'Tiger'},
        {name: 'Hero'},
        {name: 'Cat'}
    ]);

    this.level = ko.computed(function() {
        if(this.clickCount() > 200) {
            return 'Adult';
        }
        else if(this.clickCount() > 100) {
            return 'Teen';
        }
        else if (this.clickCount() > 50) {
            return 'Child';
        }
        else if(this.clickCount() > 20) {
            return 'Infant';
        }
        else return 'Newborn';

    }, this);
};

var ViewModel = function() {
    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());