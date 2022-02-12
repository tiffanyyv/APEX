// const express = require('express');
const router = require('express').Router();
const axios = require('axios');
const API_KEY = require('./config/config.js');
const { products, qA, reviews, miscAPI } = require('./controllers');
const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';
// const products = '/product/:product_id'; // maybe use later to clean up

////////////////////////////// PRODUCTS //////////////////////////////
router.get('/products', products.getAllProducts)
router.get('/products/:product_id', products.getProduct)
router.get('/products/:product_id/styles', products.getStyles)
router.get('/products/:product_id/related', products.getRelated)


////////////////////////////// REVIEWS //////////////////////////////

router.route('/products/:product_id/reviews')
  .get(reviews.getReviewById)
  .post(reviews.addReviewById)

router.route('/products/:product_id/reviews/meta')
  .get(reviews.getMetaData)

router.route('/products/:product_id/reviews/:review_id/helpful')
  .put(reviews.addHelpfulReview)

router.route('/products/:product_id/reviews/:review_id/report')
  .put(reviews.addReportReview)


////////////////////////////// QUESTIONS & ANSWERS //////////////////////////////

router.route('/products/:product_id/qa/questions')
  // .get(`${baseUrl}/qa/questions`)
  // .post(`${baseUrl}/qa/questions`)

router.route('/products/:product_id/qa/questions/:question_id/answers')
  // .get(`${baseUrl}/qa/questions/:question_id/answers`)
  // .post(`${baseUrl}/qa/questions/:question_id/answers`)

router.route('/products/:product_id/qa/questions/:question_id/helpful')
  // .put(`${baseUrl}/qa/questions/:question_id/helpful`)

router.route('/products/:product_id/qa/questions/:question_id/report')
  // .put(`${baseUrl}/qa/questions/:question_id/report`)

router.route('/products/:product_id/qa/answers/:answer_id/helpful')
  // .put(`${baseUrl}/qa/answers/:answer_id/helpful`)

router.route('/products/:product_id/qa/answers/:answer_id/report')
  // .put(`${baseUrl}/qa/answers/:answer_id/report`)


////////////////////////////// CART //////////////////////////////
router.route('/cart')
  // .get(`${baseUrl}/cart`)
  // .post(`${baseUrl}/cart`)

////////////////////////////// INTERACTIONS //////////////////////////////
router.route('/interactions')
  // .post(`${baseUrl}/interactions`)


module.exports = router;