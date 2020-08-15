import Page from "./page";

class SearchResultsPage extends Page {
    get resultItems() {
        return $$(".s-item__link");
    }
}

export default new SearchResultsPage();
