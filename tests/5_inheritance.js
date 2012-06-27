// Shamelessly pulled (yet modified) from https://github.com/mrdavidlaing/javascript-koans/blob/master/koans/AboutInheritance.js
var Muppet = function Muppet(age, hobby) {
        this.age = age;
        this.hobby = hobby;
    }

Muppet.prototype.answerNanny = function answerNanny() {
    return "Everything's cool!";
};

var SwedishChef = function SwedishChef(age, hobby, mood) {
        Muppet.call(this, age, hobby);
        this.mood = mood;
    }

SwedishChef.prototype = new Muppet();

SwedishChef.prototype.cook = function cook() {
    return "Mmmm soup!";
}


describe("About inheritance", function() {
    var muppet;
    var swedishChef;

    beforeEach(function() {
        muppet = new Muppet(2, "coding");
        swedishChef = new SwedishChef(2, "cooking", "chillin");
    });

    it("should be able to call a method on the derived object", function() {
        expect(swedishChef.cook()).toEqual(FILL_ME_IN);
    });

    it("should be able to call a method on the base object", function() {
        expect(swedishChef.answerNanny()).toEqual(FILL_ME_IN);
    });

    it("should set constructor parameters on the base object", function() {
        expect(swedishChef.age).toEqual(FILL_ME_IN);
        expect(swedishChef.hobby).toEqual(FILL_ME_IN);
    });

    it("should set constructor parameters on the derived object", function() {
        expect(swedishChef.mood).toEqual(FILL_ME_IN);
    });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function() {
    function F() {}
    F.prototype = this;
    return new F();
}

function Gonzo(age, hobby, trick) {
    Muppet.call(this, age, hobby);
    this.trick = trick;
}

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = new Muppet() //.prototype.beget();

Gonzo.prototype.doTrick = function doTrick() {
    return this.trick;
}


describe("About Crockford's inheritance improvement", function() {
    var gonzo;

    beforeEach(function() {
        gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
    });

    it("should be able to call a method on the derived object", function() {
        expect(gonzo.doTrick()).toEqual(FILL_ME_IN);
    });

    it("should be able to call a method on the base object", function() {
        expect(gonzo.answerNanny()).toEqual(FILL_ME_IN);
    });

    it("should set constructor parameters on the base object", function() {
        expect(gonzo.age).toEqual(FILL_ME_IN);
        expect(gonzo.hobby).toEqual(FILL_ME_IN);
    });

    it("should set constructor parameters on the derived object", function() {
        expect(gonzo.trick).toEqual(FILL_ME_IN);
    });
});