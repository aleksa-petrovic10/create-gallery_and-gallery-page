const locators = require("../fixtures/locatorsCreate.json")

describe ("Create gallery",() => {
    beforeEach (() => {
        cy.visit('/')
        cy.get(locators.login.loginButton).click()
        cy.get(locators.login.email).type('acafaca10@test.com')
        cy.get(locators.login.password).type('11111111')
        cy.get(locators.login.submit).click()
    })

    it ("Create gallery", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('aca')
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jpg')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery without title", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jpg')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery with one letter in title", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('a')
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jpg')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery without image", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('aca')
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery with wrong image extension", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('aca')
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jog')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery with 256 characters in title", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('LFWCaMXBLoe2ENPkvHZL7jxeFkbXk6nFp1nIt9CLcAL1QvLSCp9lAjg0cluRD9TYvhglwH9iVB7x4jeZG6OlU7et4ige7pAdBE29yjMj5SgS8vGqjblek85WjsVlT7TP2hqTVZaCFbUXLbrChA6gsjYSMD99lZivUwyH7Qp7bFwZrbgw3F92sMo30ZdUyWlMJDYnXu0m8aCoUUNKS3vhVInc3pmQVndX6A6peA8rn7tY9CYdU80k3VUhw90RbrUK')
        cy.get(locators.gallery.description).type('faca')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jpg')
        cy.get(locators.gallery.submit).click()
    })

    it ("Create gallery with 1001 characters in description", () => {
        cy.get(locators.gallery.createGallButton).click()
        cy.get(locators.gallery.title).type('aca')
        cy.get(locators.gallery.description).type('0EhDPj1dVNuTy9X8xkvVTlzV7kDnWLrIaR1304fP6i70Ph3IGK8PBReyCLLQMxyOQeSHocR7nA2F2exPVUv4DlCTWlvoGD4bUrZIHQBC6VxqvcHVqCxvuDInGnPJamxp7s6UR8yw1S5RBWdU7b5Skw2eOlKdSkSjPhXdfqeP3p9owi2If4KfINvIp4lqPrPT0CXBRRJ9MH1JApiIFGCFqUxYpvIOEhBVXPXcIfR1QaTqFoVyKXUT1rzre3uZRT9N5gfuOAYn95QP021OiPDcYfJNGH1kRsxNmzkb9Ae8iMH41DTVfojdfQEdEIEk9fXwo8ZMdhyY92vflNvuhsbodZKBN1ivhJfzo9ecXuOY3zMRTGGT9wOVcjDmokEXWo37Sp3129ekgYwrkseIYek5OorQKsqKHrvGMRX46OSSVIMJLaVui3ZruIJAbKgbGRDBihTmuPj9qW6QKL3cpq2n82GLVv5UtBVw0bozXHN3B95GrmYujX02kQp6Kgo0oCJg5WAmL6MLJ3nriNgt6dN7IHcUrkO4j9NrlQaC9l9UVlPQuXd1uU5xNWAw71WX3APKqAR2KAc6Hwr3B5Gje4RbKfuyITHZN4YI34ak8xcK1ByYWubxXhdYK44UH2ZBdTaCdz8US6DGx9Qrs7P5gnB6U6Mh5PTNDFK5A2hwuX68LFvHv7dZrFmrNxYKgaJmcldpxtQr9BhEdFrftu2beqyVR35UlRt6NsbN779Aqj5GQb5ywdWGAvjJ8gbR1ahFwosgTgUVaFgqaRbiQE3S652icKcOtW89PTbUqYqsvY4TQU99ZgyErRf08sgZQSHU4MhghFlNJS68jHPHS1dbgdsLNxJfhKFib4F3KWnQzXkc7NJ262fm9xvwLinfPH8LU0jl9dgSrsL662iydbBqMmRx2DS7Qh28NpaZCcXdLnoTiiqFFQfFes4DmeBgaDuN2x1fqgSNx8oNqYStImstNcHJeeZnZXERau5eXMjjKH34q')
        cy.get(locators.gallery.image).type('https://pbs.twimg.com/profile_images/1138831343239016451/1M9VV14k_400x400.jpg')
        cy.get(locators.gallery.submit).click()
    })

    
})