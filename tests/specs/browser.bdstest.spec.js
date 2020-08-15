import EbayHomePage from "../pageobjects/ebayhome.page";
import SearchResultsPage from "../pageobjects/searchresults.page";

describe("BDS Test", () => {
    it("Display the total amount of elements", () => {
        EbayHomePage.open();
        EbayHomePage.searchTerm.waitForDisplayed({ timeout: 3000 });
        EbayHomePage.searchTerm.click();
        EbayHomePage.searchTerm.sendKeys("tv".split(""));
        EbayHomePage.submitSearch.click();

        const count = SearchResultsPage.resultItems.length;

        console.log("===== The total amount of results is ", count);
    });
});
