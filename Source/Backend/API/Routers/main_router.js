//ALL YOUR ROUTES ARE DEFINED HERE...
//YOUR VIEWS ARE THEN EXPORTED AS A FUNCTION INTO THE RESPECTED ROUTE...
//YOUR MAIN_ROUTER WILL "GET" & CALL THE RESPECTED ROUTE THROUGH YOUR MAIN_RENDER
///////////////////////////////////////////////////////////////////////////////////



//IMPORT REQUIRED DEPENDENCIES/MODULES/LIBRARIES//
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: 'config.env'
});
const render_service = require('../Renders/main_render');
const main_router = express.Router();
const ROOT_ROUTE = process.env.ROOT_ROUTE;
const SIGN_IN_ROUTE = process.env.SIGN_IN_ROUTE;
const SIGN_UP_ROUTE = process.env.SIGN_UP_ROUTE;
const DOCS_ROUTE = process.env.DOCS_ROUTE;
const PRIVACY_POLICY_ROUTE = process.env.PRIVACY_POLICY_ROUTE;
const TERMS_CONDITIONS_ROUTE = process.env.TERMS_CONDITIONS_ROUTE;
const CONTACT_ROUTE = process.env.CONTACT_ROUTE;
const DONATE_ROUTE = process.env.DONATE_ROUTE;
/////////////////////////////////////////////////////////////////////////////////////



//DEFINE ALL ROUTES//
/**
 * @description //DEFINE THE ROOT ROUTE e.g. LANDING PAGE //
 * @method GET /home
 */
main_router.get(ROOT_ROUTE, render_service.rootRoute);

/**
 * @description //DEFINE THE SIGN-IN ROUTE e.g. SIGN-IN PAGE //
 * @method GET /sign-in
 */
main_router.get(SIGN_IN_ROUTE, render_service.signInRoute);

/**
 * @description //DEFINE THE SIGN-UP ROUTE e.g. SIGN-UP PAGE //
 * @method GET /sign-up
 */
main_router.get(SIGN_UP_ROUTE, render_service.signUpRoute);

/**
 * @description //DEFINE THE DOCUMENTATION ROUTE e.g. DOCUMENTATION PAGE //
 * @method GET /docs
 */
main_router.get(DOCS_ROUTE, render_service.docsRoute);

/**
 * @description //DEFINE THE PRIVACY-POLICY ROUTE e.g. PRIVACY POLICY PAGE //
 * @method GET /privacy-policy
 */
main_router.get(PRIVACY_POLICY_ROUTE, render_service.privacyPolicyRoute);

/**
 * @description //DEFINE THE TERMS&CONDITIONS ROUTE e.g. TERMS & CONDITIONS PAGE //
 * @method GET /terms-of-service
 */
main_router.get(TERMS_CONDITIONS_ROUTE, render_service.termsConditionsRoute);

/**
 * @description //DEFINE THE CONTACT ROUTE e.g. CONTACT US PAGE //
 * @method GET /contact
 */
main_router.get(CONTACT_ROUTE, render_service.contactRoute);

/**
 * @description //DEFINE THE DONATE ROUTE e.g. DONATIONS PAGE //
 * @method GET /donations
 */
main_router.get(DONATE_ROUTE, render_service.donateRoute);
















//YOU CAN DEFINE YOUR RESTful API HERE e.g. GET, POST, PUT, DELETE 




module.exports = main_router;