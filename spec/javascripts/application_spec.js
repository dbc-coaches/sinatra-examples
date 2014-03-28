describe("A Die object", function() {

  it("should be the result of the Die constructor function", function() {
    var aDie = new Die()
    expect(aDie instanceof Die).toBeTruthy
  })

  it("roll should set the die's value to a number between 1 and 6", function() {
    var aDie = new Die()
    var possibilities = [1,2,3,4,5,6]
    aDie.roll()
    expect(possibilities).toContain(aDie.value)
  })

  it("toHTML should return an HTML die", function() {
    var aDie = new Die()
    var htmlDie = aDie.toHTML()
    expect( htmlDie.innerText ).toEqual( aDie.value.toString() )
  })

})

describe("a DomTalker object", function() {

  describe("the renderDie function", function() {
    var diceOnDom;
    var die;
    var view;

    beforeEach(function() {
      // appends the correct dom dependencies to the Jasmine test suite
      diceOnDOM = document.createElement('div')
      diceOnDOM.className += 'dice'
      document.body.appendChild(diceOnDOM)
      die = new Die()
      view = new DomTalker()
    })

    afterEach(function() {
      // cleanup after your test, removing the element that we just created.
      document.body.removeChild(diceOnDOM)
    })

    it('should render a single die', function() {
      // set up for the test
      view.renderDie(die)

      // queries the dom to see if a new die appeared on the DOM
      var dieOnDom = document.querySelector('.dice div')

      // the test
      expect( dieOnDom.innerText ).toEqual( die.value.toString() )
    })

  })

})