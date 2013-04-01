casper.test.comment 'Testing the www.cycletrader.com home page'

casper.start 'http://www.cycletrader.com', ->
  @test.comment 'Testing the main menu bar layout'
  @test.assertExists '#mainMenuBar .home', 'The main menu home link exists'
  @test.assertExists '#mainMenuBar .paaBtn', 'The main menu paa link exists'
  @test.assertEquals @getElementBounds('#mainMenuBar .home').top, @getElementBounds('#mainMenuBar .paaBtn').top, 'The home link and paa link are inline with eachother'

casper.thenClick '#tabSelector2 a', ->
  @test.comment 'Testing the Search by Make layout'
  @test.assertVisible '#tab-2', 'The search by make list is visible'

casper.run ->
  @test.done()
