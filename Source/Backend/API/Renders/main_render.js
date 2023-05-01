//ALL YOUR VIEWS ARE RENDERED HERE...
//YOUR VIEWS ARE THEN EXPORTED AS A FUNCTION INTO THE RESPECTED ROUTE...
//YOUR MAIN_ROUTER DEFINES THE RESPECTED ROUTE & USES THE EXPRESS-SERVER TO "GET" THE VIEW...
//DO NOT MODIFY YOUR DEFAULT MAIN RENDERS UNLESS YOU KNOW HOW...
//////////////////////////////////////////////////////////////////////////////////////////////



/////   ROOT_ROUTE   -->   TO   -->   MAIN_VIEW   //////
exports.rootRoute = (req, res) => {
        res.render('main_view');
}

/////   PRIVACY_POLICY_ROUTE   -->   TO   -->   PRIVACY_POLICY_VIEW   //////
exports.privacyPolicyRoute = (req, res) => {
        res.render('privacy-policy_view');
}

/////   TERMS_CONDITIONS_ROUTE   -->   TO   -->   TERMS&CONDITIONS_VIEW   //////
exports.termsConditionsRoute = (req, res) => {
        res.render('terms_conditions_view');
}

/////   CONTACT_ROUTE   -->   TO   -->   CONTACT_VIEW   //////
exports.contactRoute = (req, res) => {
        res.render('contact_view');
}

/////   DONATE_ROUTE   -->   TO   -->   DONATE_VIEW   //////
exports.donateRoute = (req, res) => {
        res.render('donate_view');
}

