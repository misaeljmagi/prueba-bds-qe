import Page from "../pageobjects/page";

class EbayHomePage extends Page {
    get searchTerm() {
        return $("#kw");
    }

    get submitSearch() {
        return $(".gh-search__submitbtn");
    }
    open() {
        super.open("");
    }
}

export default new EbayHomePage();
