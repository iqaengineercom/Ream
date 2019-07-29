import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import SignInPage from '../../support/pageObjects/SignInPage'
import CreateAsset from '../../support/pageObjects/Asset'


import Chance from 'chance'
const chance = new Chance()
const email = chance.email();
const password = chance.string()



Given(`I’m logged in as a surveyor`, () => {
    SignInPage.visit()
        .fillEmail(email)
        .fillPassword(password)
        .submitCredentials()
        .verifyLoggedIn()

})
Given(`I've navigated to the space page`, () => {
    CreateAsset.floor()
                .getUrl().then(url =>{
        expect (url).to.contain ('/data-collection/edge-hill-university-(vas)/facilities/sports-centre')
    })
    CreateAsset.space()
                .getUrl().then (url =>{
        expect (url).to.contain ('/data-collection/edge-hill-university-(vas)/facilities/sports-centre/floors/dt-super-duper')
    })

})
    When(`I create an asset`, () => {
        CreateAsset.addasset()
            .popupasset()
            .cardrecorder()
            .Quantity()
            .Condition()
            .Dates()
            .submit
            .cancels()
    })

    Then(`the asset should appear in the table`, () => {
        CreateAsset.tables()

    })
    And(`the asset should sync to the database`, () => {


    })
