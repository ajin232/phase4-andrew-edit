class MenuFunctionality{

}

function toggleMenu() {
    if (menu.className === "menu show") {
        menu.className = "menu hide";
        hamburger.className = "menuicon";
    } else {
        menu.className = "menu show";
        hamburger.className = "menuicon toggled";
    }
};

function toggleMenuRecipes() {
    if (menu.className === "menu show") {
        menu.className = "menu hide";
        hamburger.className = "menuicon";

        // close all others
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";

    } else {
        menu.className = "menu show";
        hamburger.className = "menuicon toggled";

        // close all others
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
        

    }

};


function togglePopup() {
    if (popup.className === "form-popup fprshow") {
        popup.className = "form-popup";
        plus.className = "menuicon";

    } else {
        popup.className = "form-popup fprshow";
        plus.className = "menuicon toggled";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
    }
};

function togglePopupPersons() {
    if (popupPersons.className === "popup pshow" || overlayPersons.className === "overlay oshow") {
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
    } else {
        popupPersons.className = "popup pshow";
        overlayPersons.className = "overlay oshow";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        plus.className = "menuicon";
        popup.className = "form-popup";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
    }
};

function togglePopupMeals() {
    if (popupMeals.className === "popup pshow" || overlayMeals.className === "overlay oshow") {
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
    } else {
        popupMeals.className = "popup pshow";
        overlayMeals.className = "overlay oshow";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        plus.className = "menuicon";
        popup.className = "form-popup";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
    }
};

function togglePopupFlavors() {
    if (popupFlavors.className === "popup pshow" || overlayFlavors.className === "overlay oshow") {
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    } else {
        popupFlavors.className = "popup pshow";
        overlayFlavors.className = "overlay oshow";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        plus.className = "menuicon";
        popup.className = "form-popup";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
    }
};

function togglePopupDiet() {
    if (popupDiet.className === "popup pshow" || overlayDiet.className === "overlay oshow") {
        popupDiet.className = "popup";
        overlayDiet.className = "overlay";
    } else {
        popupDiet.className = "popup pshow";
        overlayDiet.className = "overlay oshow";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        plus.className = "menuicon";
        popup.className = "form-popup";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    }
};

function togglePopupNetwork() {
    if (popupNetwork.className === "popup pshow") {
        popupNetwork.className = "popup";
        overlayNetwork.className = "overlay";
    } else {
        popupNetwork.className = "popup pshow";
        overlayNetwork.className = "overlay oshow";
    }
};

function togglePopupSearch() {
    if (popupSearch.className === "popup pshow") {
        popupSearch.className = "popup";
        overlaySearch.className = "overlay";
    } else {
        popupSearch.className = "popup pshow";
        overlaySearch.className = "overlay oshow";
    }
};

function closeSearch() {
    popupSearch.className = "popup";
    overlaySearch.className = "overlay";
};

function toggleProfileForm() { // opens/closes the form to enter food items to your kitchen page
    if (myFormProfile.className === "form-popup-profile fpsshow"){
        myFormProfile.className = "form-popup-profile";
    } else {
        myFormProfile.className = "form-popup-profile fpsshow";
        popupNetwork.className = "popup";
    } 
};


    